import './homepage.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AWS from 'aws-sdk';


function HomePage() {
  const [image, setImage] = useState(null);
  const [selection, setSelection] = useState('custom');
  const [isTextBoxVisible, setTextBoxVisible] = useState(true);

  const s3 = new AWS.S3({
    accessKeyId: 'AKIAS2MZU3KWX52A6PXB',
    secretAccessKey: 'YmZNKfM/qvpfgWu9ZymgadoCG19Dl+Ocgw+D1Hdp',
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
          </nav>
        </header>
        <div className="button-container">
          <button className="toggle-button" onClick={toggleTextBox}>
            {isTextBoxVisible ? 'Hide' : 'Display'}
          </button>
          <h1>Diabetic Retinopathy Detection</h1>
          <button className="randomdownload" onClick={handleDownload}>Download Example Image</button>
        </div>
        {isTextBoxVisible && (
          <div className={`text-box ${isTextBoxVisible ? 'text-box-visible' : ''}`}>
            <p>Over 3 million Canadians have been diagnosed with diabetes, and this number is steadily increasing, with an estimated average annual increase of 3.3%. Furthermore, the annual cost of diabetes treatment in the United States exceeds $15,000, which is 2.3 times higher than what an average US citizen spends on medical treatments. Therefore, early diagnosis and treatment of diabetes are essential not only for mitigating health risks but also for alleviating the financial burden by decreasing the likelihood of severe and costly treatments.</p>
            <p>Diabetes is a chronic condition characterized by high blood sugar levels, which can range from mild to severe symptoms. If left undiagnosed or uncontrolled, it can lead to permanent severe health conditions and, in some cases, death. Early identification allows doctors to initiate medical treatments, educate patients about lifestyle modifications, and introduce dietary changes, medication, and exercise regimens. Early intervention can not only reduce blood sugar levels but also enable patients to maintain these levels from an early stage, minimizing the risk of kidney damage, vision loss, nerve damage, and cardiovascular diseases.</p>
            <p>This website was developed to assist patients and medical practitioners in diagnosing early-onset diabetic retinopathy using deep learning methods. Retinal fundus images were obtained and utilized by a group of researchers at Queen’s University to make accurate predictions for diabetic retinopathy. The researchers compared the use of custom deep learning prediction models with pretrained models developed by other researchers to predict proliferative (severe) and non-proliferative (early-stage) diabetic retinopathy. Each model developed and tested has demonstrated its benefits and potential use cases. Users are advised to read the FAQ page to learn more about the pros and cons of each model type.</p>
            <p><b>Disclaimer:</b> The use of this website complies with all governing bodies; however, it should only be used as an aid, not a definitive cause. Images uploaded are not saved and will not be collected.</p>
          </div>
        )}

      </div>

      <main className="main">
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
    </div>
  );
};

export default HomePage;