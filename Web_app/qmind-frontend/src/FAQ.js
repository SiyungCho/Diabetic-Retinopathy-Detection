import './faq.css';
import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import karim_headshot from './team_headshots/karim-headshot.jpg'
import ali_headshot from './team_headshots/ali-headshot.png'
import aimee_headshot from './team_headshots/aimee-headshot.jpg'
import ola_headshot from './team_headshots/ola-headshot.jpg'
import siyung_headshot from './team_headshots/siyung_headshot.png'
import custom_model from './architecture_images/custom_model.png'
import inception_v3 from './architecture_images/inception_model.png'
import resnet_50 from './architecture_images/resnet_model.png'
import resnet_plot from './architecture_images/resnet_graph.png'
import inception_plot from './architecture_images/inception_graph.png'
import custom_plot from './architecture_images/custom_graph.png'

function DownloadPDF() {
    return (
      <a href={`${process.env.PUBLIC_URL}/robots.txt`} download="placeholder.txt">
        Download Research Article
      </a>
    );
  }

const FAQ = () => {
    const [isTextBoxVisible1, setTextBoxVisible1] = useState(true);
    const [isTextBoxVisible2, setTextBoxVisible2] = useState(true);
    const [isTextBoxVisible3, setTextBoxVisible3] = useState(true);

    const toggleTextBox1 = () => {
        setTextBoxVisible1(!isTextBoxVisible1);
      };

    const toggleTextBox2 = () => {
        setTextBoxVisible2(!isTextBoxVisible2);
      };
    
    const toggleTextBox3 = () => {
        setTextBoxVisible3(!isTextBoxVisible3);
      };

    const handleBubbleClick = (url) => {
        window.open(url, "_blank");
    };
    
    return (
        <div className="faq-page">
            <header className="header">
                <Link to="/"><nav className="logo">Home</nav></Link>
                <nav className="nav">
                    <Link to="/faq">FAQ</Link>
                    <Link to="/terms">Terms Of Use</Link>
                    <DownloadPDF />
                </nav>
            </header>

            
            <section className="static-content">

                <button className="toggle-button-faq button-color1" onClick={toggleTextBox1}>
                {isTextBoxVisible1 ? 'Custom Model' : 'Custom Model'}
                </button>
                {isTextBoxVisible1 && (
                <div className={`text-box-faq ${isTextBoxVisible1 ? 'text-box-visible-faq' : ''}`} style={{ backgroundColor: '#f0f2f5', borderLeftColor : '#A462C7', borderLeftWidth: '5px', borderLeftStyle: 'solid'  }}>
                    <div className="subsection">
                    <h2>Custom CNN</h2>
                    <div className='model_info'>
                        <div className='model_text'>
                            <p>Our custom CNN model is tailored specifically for our unique dataset and task. It features a structured design with four convolutional layers that help in extracting and refining data features. These layers are followed by batch normalization and max pooling to further process the data. After flattening the data to reduce its dimensions, it passes through a dense network with two hidden layers and dropout layers to prevent overfitting, improving the model's ability to work with new, unseen data.</p>
                            <p>Several Tests were conducted on the model particularly one which utililized the CLAHE image enhancement technique. The model particularly excels with CLAHE-preprocessed images, as shown by its accuracy, though it saw a drop in performance in another test. This indicates its fine-tuning for specific types of image enhancements. Its steady improvement in initial tests and strong performance with both grayscale and RGB images underscore its versatility. By effectively handling different preprocessing methods, the model boosts diagnostic accuracy, essential in medical imaging fields for achieving a good balance between precision and recall. This adaptability demonstrates the benefits of a custom approach that can leverage diverse preprocessing techniques for better results.</p>
                        </div>
                        <div className='model_images'>
                            <img src={custom_model} alt="Inception V3" className='model_image'/>
                            <img src={custom_plot} alt="Custom Model" className='model_image'/>
                        </div>
                    </div>
                    </div>
                </div>
                )}

                <button className="toggle-button-faq button-color2" onClick={toggleTextBox2} >
                {isTextBoxVisible2 ? 'Inception V3' : 'Inception V3'}
                </button>
                {isTextBoxVisible2 && (
                <div className={`text-box-faq ${isTextBoxVisible2 ? 'text-box-visible-faq' : ''}`} style={{ backgroundColor: '#e6e8eb', borderLeftColor : '#4266E8', borderLeftWidth: '5px', borderLeftStyle: 'solid' }}>
                    <div className="subsection" style={{ backgroundColor: '#e6e8eb' }}>
                    <h2>Inception V3</h2>
                    <div className='model_info'>
                        <div className='model_text'>
                            <p>The InceptionV3 model is designed to recognize patterns efficiently by using multiple kernel sizes in the same layer, allowing it to capture details at various scales with fewer computational resources. It incorporates asymmetric convolutions, breaks down larger convolutions into smaller ones, and uses auxiliary classifiers to improve training efficiency and accuracy by addressing the vanishing gradient problem.</p>
                            <p>In testing, the InceptionV3 model showed mixed results. It performed notably well with Grayscale Enhanced Images, with an accuracy of 0.61, indicating it works particularly well with images enhanced through the isolated green channel technique, which highlights important features for diagnosing diabetic retinopathy.</p>
                            <p>The model also improved its recall metric through further testing demonstrating its adeptness at adapting to various preprocessing methods. However, its performance dipped when handling RGB images compared to grayscale, suggesting it may be sensitive to changes in color information.</p>
                        </div>
                        <div className='model_images'>
                            <img src={inception_v3} alt="Inception V3" className='model_image'/>
                            <img src={inception_plot} alt="Inception Model" className='model_image'/>
                        </div>
                    </div>
                    </div>
                </div>
                )}

                <button className="toggle-button-faq button-color3" onClick={toggleTextBox3}>
                {isTextBoxVisible3 ? 'Resnet 50' : 'Resnet 50'}
                </button>
                {isTextBoxVisible3 && (
                <div className={`text-box-faq ${isTextBoxVisible3 ? 'text-box-visible-faq' : ''}`} style={{ backgroundColor: '#dcdfe3', borderLeftColor : '#FCA311', borderLeftWidth: '5px', borderLeftStyle: 'solid' }}>
                    <div className="subsection" style={{ backgroundColor: '#dcdfe3' }}>
                    <h2>Resnet 50</h2>
                    <div className='model_info'>
                        <div className='model_text'>
                            <p>The ResNet-50 model addresses deep networks' degradation issue by using residual learning. It incorporates residual blocks with skip connections, facilitating the training of deeper models without performance loss. This method of learning residual functions in relation to the input layers significantly boosts its learning efficiency and ability to generalize.</p>
                            <p>ResNet-50 showed variable results across tests, similar to InceptionV3, but it performed best with CLAHE processing, indicating the effectiveness of CLAHE across various model architectures.</p>
                            <p>The model's further testing reveals its adaptability, with a noticeable improvement in accuracy. Despite initial struggles with enhanced grayscale images, ResNet-50 improved in subsequent tests, pointing to its potential with certain preprocessing techniques. </p>
                        </div>
                        <div className='model_images'>
                            <img src={resnet_50} alt="Resnet 50" className='model_image'/>
                            <img src={resnet_plot} alt="Resnet Model" className='model_image'/>
                        </div>
                    </div>
                    </div>
                </div>
                )}
             
            </section>

            <section className="meet-the-team">
                <h2>Meet the Team</h2>
                <div className="team-bubbles" id="bottom">
                    <div className="bubble" onClick={() => handleBubbleClick('https://www.linkedin.com/in/siyung-cho-04b046207/')}>
                        <p className="bubble-text">Project Manager</p>
                        <div className="bubble-image">
                            <img src={siyung_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Frank Siyung Cho</p>
                    </div>
                    <div className="bubble" onClick={() => handleBubbleClick('https://www.linkedin.com/in/ola-elmaghraby-4b891221a')}>
                        <p className="bubble-text">Developer</p>
                        <div className="bubble-image">
                            <img src={ola_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Ola Elmaghraby</p>
                    </div>
                    <div className="bubble" onClick={() => handleBubbleClick('https://www.linkedin.com/in/ali-zidan-36b07b205/')}>
                        <p className="bubble-text">Developer</p>
                        <div className="bubble-image">
                            <img src={ali_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Ali Zidan</p>
                    </div>
                    <div className="bubble" onClick={() => handleBubbleClick('http://linkedin.com/in/aimeelangevin')}>
                        <p className="bubble-text">Developer</p>
                        <div className="bubble-image">
                            <img src={aimee_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Aimee Langevin</p>
                    </div>
                    <div className="bubble" onClick={() => handleBubbleClick('https://www.linkedin.com/in/karim-ali-960a0927b/')}>
                        <p className="bubble-text">Developer</p>
                        <div className="bubble-image">
                            <img src={karim_headshot} alt="Team Member" />
                        </div>
                        <p className="bubble-text">Karim Ali</p>
                    </div>
                </div>
            </section>
            
        </div>
        
        
    );
}

export default FAQ;