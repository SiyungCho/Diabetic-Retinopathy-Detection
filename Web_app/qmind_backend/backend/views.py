from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import backend
import base64
from io import BytesIO
import matplotlib
matplotlib.use('Agg')  # Use the Agg backend
import matplotlib.pyplot as plt
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image as keras_image
from scipy.ndimage import median_filter
import cv2
from PIL import Image
import pandas as pd

def apply_median_filter(image):
    return median_filter(image, size=3)

def isolate_green_channel(image):
    return image[:,:,1]

def enhance_luminance(image, gamma=1/2.2):
    hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    v_channel = hsv_image[:, :, 2]
    normalized_v = v_channel / 255.0
    gamma_corrected_v = np.power(normalized_v, gamma)
    enhanced_v = (gamma_corrected_v * 255.0).astype(np.uint8)
    hsv_image[:, :, 2] = enhanced_v
    enhanced_image = cv2.cvtColor(hsv_image, cv2.COLOR_HSV2BGR)
    return enhanced_image

def enhance_contrast(image, gamma=1/2.2, clip_limit=3, tiles=(4, 4)):
    enhanced_image = enhance_luminance(image, gamma)
    lab_image = cv2.cvtColor(enhanced_image, cv2.COLOR_BGR2Lab)
    l_channel = lab_image[:, :, 0]
    clahe = cv2.createCLAHE(clipLimit=clip_limit, tileGridSize=tiles)
    enhanced_l_channel = clahe.apply(l_channel)
    lab_image[:, :, 0] = enhanced_l_channel
    enhanced_image = cv2.cvtColor(lab_image, cv2.COLOR_Lab2BGR)
    return enhanced_image

def custom_preprocessing(image):
    green_channel_img = isolate_green_channel(image)
    # Convert 2D image to 3D
    green_channel_img = cv2.cvtColor(green_channel_img, cv2.COLOR_GRAY2BGR)
    med_filter_img = apply_median_filter(green_channel_img)
    processed_image = enhance_contrast(med_filter_img)
    return processed_image

def get_graphs(dir):
    graph_img = Image.open(dir)
    graph_img = graph_img.convert('RGB')
    graph_img_array = np.array(graph_img)

    graph_img = Image.fromarray(graph_img_array, 'RGB')
    buffer = BytesIO()
    graph_img.save(buffer, format="png")
    buffer.seek(0)
    graph_img_base_64 = base64.b64encode(buffer.getvalue()).decode('utf-8')
    return graph_img_base_64

def read_metrics_from_csv(filename):
    df = pd.read_csv(filename)
    metrics_data = df.to_dict(orient='records')
    return metrics_data


@csrf_exempt
def upload_image(request):
    if request.method == 'POST':
        try:
            image_file = request.FILES['image']
            selection = request.POST.get('selection')

            metrics_filename = f'backend/{selection}/metrics.csv'
            metrics_data = read_metrics_from_csv(metrics_filename)
            print(metrics_data)

            img = Image.open(image_file)
            img = img.resize((256, 256))
            img = img.convert('RGB')
            img_array = np.array(img)
            enhanced_image = custom_preprocessing(img_array) #apply custom image enhancements

            if selection == 'resnet':
                model = load_model('backend/resnet/S3.keras')
                acc_value = 0.66
            elif selection == 'inception':
                model = load_model('backend/inception/O1.keras')
                acc_value = 0.67
            elif selection == 'custom':
                enhanced_image = cv2.cvtColor(enhanced_image, cv2.COLOR_BGR2GRAY)
                model = load_model('backend/custom/A3.keras')
                acc_value = 0.71

            dir = f'backend/{selection}/graph.png'
            graph_img_base_64 = get_graphs(dir)

            dir = f'backend/{selection}/confusion.png'
            confusion_img_base_64 = get_graphs(dir)

            img_array_expanded_dims = np.expand_dims(enhanced_image, axis=0)
            processed_image = img_array_expanded_dims / 255.0

            prediction = model.predict(processed_image)
            result = int(np.argmax(prediction))

            if result == 0:
                prediction_result = 'No Diabetic Retinopathy'
            elif result == 1:
                prediction_result = 'Non Proliferative Diabetic Retinopathy'
            elif result == 2:
                prediction_result = 'Proliferative Diabetic Retinopathy'
            else:
                prediction_result = 'Error in Prediction. Please try again.'
            
            if selection == 'custom':
                img = Image.fromarray(enhanced_image, 'L')
            else:
                img = Image.fromarray(enhanced_image, 'RGB')

            img = img.resize((256, 256))
            
            buffer = BytesIO()
            img.save(buffer, format="png")
            buffer.seek(0)
            enhanced_image_base_64 = base64.b64encode(buffer.getvalue()).decode('utf-8')

            img = Image.open(f'./backend/{selection}/{selection}_model.png')
            img.save(buffer, format="png")
            buffer.seek(0)
            model_graph = base64.b64encode(buffer.getvalue()).decode('utf-8')

            img = Image.open(f'./backend/{selection}/class_distribution.png')
            img.save(buffer, format="png")
            buffer.seek(0)
            class_distribution_graph = base64.b64encode(buffer.getvalue()).decode('utf-8')

            return JsonResponse({'accuracy': acc_value,'metrics': metrics_data ,'prediction': prediction_result, 'graphs': [enhanced_image_base_64, graph_img_base_64, confusion_img_base_64, model_graph, class_distribution_graph]}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'POST request required.'}, status=400)