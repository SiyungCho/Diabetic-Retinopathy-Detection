import './homepage.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AWS from 'aws-sdk';
import custom_image from './architecture_images/home_image.png'

function DownloadPDF() {
  return (
    <a href={`${process.env.PUBLIC_URL}/robots.txt`} download="placeholder.txt">
      Download Research Article
    </a>
  );
}

function HomePage() {
  const [image, setImage] = useState(null);
  const [selection, setSelection] = useState('custom');
  const [isTextBoxVisible, setTextBoxVisible] = useState(true);

  const s3 = new AWS.S3({
    region: 'us-east-2',
  });
  const s3BucketName = 'exampleretinalfundimages';

  const getRandomImageFromS3 = async () => {
    try {
      const s3Objects = await s3.listObjectsV2({ Bucket: s3BucketName }).promise();
      const randomObject = s3Objects.Contents[Math.floor(Math.random() * s3Objects.Contents.length)];
      const signedUrl = s3.getSignedUrl('getObject', {
        Bucket: s3BucketName,
        Key: randomObject.Key,
        Expires: 10, // Link expires in 10 seconds
        ResponseContentDisposition: `attachment; filename="${randomObject.Key}"` // Prompts download with the original filename
      });
  
      return [signedUrl, randomObject.Key];
    } catch (error) {
      console.error('Error fetching random image from S3:', error);
      return null;
    }
  };

  const handleDownload = async () => {
    const elements= await getRandomImageFromS3();
    if (elements && elements[0]) {
      // Trigger download with the retrieved image URL
      const anchor = document.createElement('a');
      anchor.href = elements[0];
      anchor.download = elements[1];
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } else {
      alert('Failed to fetch random image from S3. Please try again later.');
    }
  };

  const navigate = useNavigate();

  const toggleTextBox = () => {
    setTextBoxVisible(!isTextBoxVisible);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSelectionChange = (e) => {
    setSelection(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('selection', selection);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload_image/', formData);
      console.log('Server response:', response.data);
      navigate('/display', { state: { ...response.data } });
      } catch (error) {
          console.error('Upload error:', error.response);
      }

  };

  return (
    <div className="container">
      <div>
        <header className="header">
          <nav className="logo">Diabetic Retinopathy Homepage</nav>
          <nav className="nav">
            <Link to="/faq">FAQ</Link>
            <Link to="/terms">Terms Of Use</Link>
            <DownloadPDF />
          </nav>
        </header>
        <div className="button-container">
          <h1>Diabetic Retinopathy Detection</h1>
          <button className="randomdownload" onClick={handleDownload}>Download Example Image</button>
        </div>
      <main className="main">
        <div className='toggle-container'>
          <button className="toggle-button" onClick={toggleTextBox}>
              {isTextBoxVisible ? 'Hide' : 'Display'}
          </button>
        </div>
        <label htmlFor="upload-button" className="upload-button">
          <form onSubmit={handleSubmit}>
            <input type="file" className="submit-button" onChange={handleImageChange} />
            <select value={selection} onChange={handleSelectionChange} className="submit-button dropdown">
              <option value="custom">Custom</option>
              <option value="inception">InceptionV3</option>
              <option value="resnet">Resnet50</option>
            </select>
            <button type="submit" className="submit-button">Upload Image</button>
          </form>
        </label>
      </main>
        {isTextBoxVisible && (
          <div className={`text-box ${isTextBoxVisible ? 'text-box-visible' : ''}`}>
            <img src={custom_image} alt="DR Stages" style={{height:'420px', display: 'block',  float: 'right', margin:'5px'}}/>
            <p>Diabetes is a systemic condition characterized by elevated blood sugar levels affecting more than 537 million adults globally. With predictions of rising to more than 783 million adults by 2045, responsible for 6.7 million deaths in 2021, and costing healthcare expenditures of almost 966 billion USD in the last 15 years, timely interventions are needed to control its associated symptoms. <br /><br />Without timely intervention, diabetes can cause irreversible health issues and potentially lead to death. Early diagnosis and treatment of diabetes are crucial for reducing health risks and financial burdens by preventing severe and costly treatments, enabling treatment starts and patient education on lifestyle adjustments. Such proactive measures can lower and stabilize blood sugar levels, significantly decreasing the chances of kidney damage, vision loss, nerve damage, and cardiovascular diseases. <br /><br />One such symptom associated with diabetes is diabetic retinopathy(DR), a condition affecting more than one-third of adults above 40 years of age with diabetes. This progressive condition, affecting the eye’s ability to retain visual capacity, can manifest through weakening of capillary walls, the escape of blood through blood vessels, and even detachment of the retina: which may lead to permanent blindness. DR is categorized as either non-proliferative(early-stage) or proliferative(late stage).<br /><br />This website was developed to assist patients and medical practitioners in diagnosing early-onset dry using deep learning methods. Retinal fundus images were obtained and utilized by a group of researchers at Queen’s University to make accurate predictions for diabetic retinopathy. The researchers compared the use of custom deep learning prediction models with pretrained models developed by other researchers to predict proliferative (severe) and non-proliferative (early-stage) DR. Each model developed and tested has demonstrated its benefits and potential use cases. Users are advised to read the FAQ page to learn more about the pros and cons of each model type.<br /><br /><b>Disclaimer:</b> The use of this website complies with all governing bodies; however, it should not be used as a substitute for professional medical advice, diagnosis, or treatment. We are not liable for any warranty or liability for your use of this information. Images uploaded are not saved and will not be collected. Your use of this information means you agree to our <Link to="/terms"><b>Terms of Use.</b></Link></p>
          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;
