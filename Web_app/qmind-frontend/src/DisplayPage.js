import './homepage.css';
import './displayPage.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography} from '@mui/material';
import paper_image from './architecture_images/paper_image.PNG';

function DownloadPDF() {
  return (
    <a href={`${process.env.PUBLIC_URL}/robots.txt`} download="placeholder.txt">
      Download Research Article
    </a>
  );
}

function FlipCard({ front, back, inner_class, backColor}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${inner_class}`} style={{ backgroundColor : `${backColor}` }}>
      <div className="flip-card" onClick={handleClick}>
        <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`} >
          <div className="flip-card-front">
              {front}
          </div>
          <div className="flip-card-back">
              {back}
          </div>
        </div>
      </div>
    </div>
  );
}

function DisplayPage() {
  const location = useLocation();
  const { pred_list, accuracy, metrics, prediction, graphs } = location.state;

  const renderGraph = (value, index, specclass, inner_styles) => (
      <img src={`data:image/png;base64,${value}`} alt={`Graph ${index+1}`} className={`${specclass}`} style={{height:`${inner_styles[0]}`, width:`${inner_styles[1]}`}}/>
  );

  const renderBackContent = (content) => (
    <Typography variant="body1" color="common.black">
      <div className="prediction-title">{content}</div>
    </Typography>
  );

  return (
    <div className="display-container">
      <header className="header">
        <Link to="/"><nav className="logo">Home</nav></Link>
        <nav className="nav">
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Terms Of Use</Link>
          <DownloadPDF />
        </nav>
      </header>
      
      <div className="second-container">

        <div className="content-box" style={{height:'40px', width:'50%', marginTop: '5vh', marginBottom:'5vh', display:'flex', alignContent:'center', justifyContent:'center', paddingTop: '1px'}}>
          <h1>Diabetic Retinopathy Results</h1>
        </div>

        <div className="content-box">
          <div className="flex-row">
              <FlipCard 
                    front={renderGraph(graphs[0], 0, 'image' , ['',''])} 
                    back={renderBackContent(`Original Image`)} 
                    inner_class="box box-image"
                    backColor="#79BBEB"
              />

              <div className={'box prediction-box'} style={{backgroundColor :`${prediction === 'No Diabetic Retinopathy' ? '#B2C8B8' : prediction === 'Non Proliferative Diabetic Retinopathy' ? 'bg-orange' : 'bg-red'}`}}>
                <div className="prediction-content">
                  <div className="prediction-title">Prediction Result:</div>
                  <Typography variant="body1" color="common.black" style={{fontSize:'20px'}}>
                    {prediction}
                  </Typography>
                </div>
              </div>

              <FlipCard 
                    front={renderGraph(graphs[1], 1, 'image', ['',''])} 
                    back={renderBackContent(`Fully Enhanced Image`)} 
                    inner_class="box box-image"
                    backColor="#79BBEB"
              />
          </div>
        </div>

        <div className="content-box" style={{height:'40px', width:'50%', marginTop: '5vh', marginBottom:'5vh', display:'flex', alignContent:'center', justifyContent:'center', paddingTop: '1px'}}>
          <h1>Probabilities and Preprocessing</h1>
        </div>

        <div className="content-box">
          <div className="flex-row">
            <div className="box prediction-table">
            <table style={{
                width: '100%',
                height: '100%',
                borderCollapse: 'collapse',
                textAlign: 'center',
              }}>
                <thead style={{
                  backgroundColor: '#004466',
                  color: '#FFFFFF',
                }}>
                  <tr>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>Class</th>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>Probability</th>
                  </tr>
                </thead>
                <tbody>
                  {pred_list.map((row, index) => (
                    <tr key={index}>
                      <td style={{ padding: '2px', border: '1px solid #dddddd' }}>{row.class}</td>
                      <td style={{ padding: '2px', border: '1px solid #dddddd' }}>{parseFloat(row.probability).toFixed(3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> 
            <FlipCard 
                    front={renderGraph(graphs[2], 2, 'image', ['80%','80%'])} 
                    back={renderBackContent(`Class Distribution of Original Dataset`)} 
                    inner_class="box box-image"
                    backColor="#FFFFFF"
              />
            <FlipCard 
                    front={renderGraph(graphs[3], 3, 'image', ['80%','80%'])} 
                    back={renderBackContent(`Class Distribution of Preprocessed Dataset`)} 
                    inner_class="box box-image"
                    backColor="#FFFFFF"
            />
          </div>
        </div>

        <div className="content-box" style={{height:'40px', width:'50%', marginTop: '5vh', marginBottom:'5vh',display:'flex', alignContent:'center', justifyContent:'center', paddingTop: '1px'}}>
          <h1>Image Enhancements</h1>
        </div>

        <div className="content-box">
          <div className="flex-row">
            <FlipCard 
                    front={renderGraph(graphs[4], 4, 'image', ['',''])} 
                    back={renderBackContent(`Original Image Enhanced via Isolating Green Channel`)} 
                    inner_class="box box-image"
                    backColor="#D2B48C"
            />
            <FlipCard 
                    front={renderGraph(graphs[5], 5, 'image', ['',''])} 
                    back={renderBackContent(`Original Image Enhanced via Applying Median Filter`)} 
                    inner_class="box box-image"
                    backColor="#D2B48C"
            />
            <FlipCard 
                    front={renderGraph(graphs[6], 6, 'image', ['',''])} 
                    back={renderBackContent(`Original Image Enhanced via Applying CLAHE Filter`)} 
                    inner_class="box box-image"
                    backColor="#D2B48C"
            />
          </div>
        </div>

        <div className="content-box" style={{height:'40px', width:'50%', marginTop: '5vh', marginBottom:'5vh', display:'flex', alignContent:'center', justifyContent:'center', paddingTop: '1px'}}>
          <h1>Model Training and Results</h1>
        </div>

        <div className="content-box">
          <div className="flex-row">
            <FlipCard 
                    front={renderGraph(graphs[7], 7, 'image', ['',''])} 
                    back={renderBackContent(`Training and Testing Plots, including Accuracy and Loss metrics`)} 
                    inner_class="box wide architecture-image"
                    backColor=""
            />
            <div className="box prediction-table">
            <table style={{
                width: '100%',
                height: '100%',
                borderCollapse: 'collapse',
                textAlign: 'center',
              }}>
                <thead style={{
                  backgroundColor: '#004466',
                  color: '#FFFFFF',
                }}>
                  <tr>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>Test</th>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>Training</td>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>0.99</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>Validation</td>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>{accuracy}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="content-box" style={{height:'40px', width:'50%', marginTop: '5vh', marginBottom:'5vh', display:'flex', alignContent:'center', justifyContent:'center', paddingTop: '1px'}}>
          <h1>Model Parameter Tuning</h1>
        </div>

        <div className="content-box">
          <div className="flex-row">
          <div className="box prediction-table-grid">
            <table style={{
                width: '100%',
                height: '100%',
                borderCollapse: 'collapse',
                textAlign: 'center',
              }}>
                <thead style={{
                  backgroundColor: '#004466',
                  color: '#FFFFFF',
                }}>
                  <tr>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>Parameters</th>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>Values</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>Batch Size</td>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>32, 64</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>Epochs</td>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>25, 30, 35</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>Optimizers</td>
                    <td style={{ padding: '2px', border: '1px solid #dddddd' }}>SGD, Adagrad, Adadelta, Adam, Adamax, Nadam</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <FlipCard 
                    front={renderGraph(graphs[8], 8, 'image', ['',''])} 
                    back={renderBackContent(`Model Architecture`)} 
                    inner_class="box wide-fix training-image"
                    backColor=""
            />
          </div>
        </div>

        <div className="content-box" style={{height:'40px', width:'50%', marginTop: '5vh', marginBottom:'5vh', display:'flex', alignContent:'center', justifyContent:'center', paddingTop: '1px'}}>
          <h1>Final Results</h1>
        </div>

        <div className="content-box">
          <div className="flex-row">
            <FlipCard 
                    front={renderGraph(graphs[9], 9, 'image', ['',''])} 
                    back={renderBackContent(`Validation Testing Confusion Matrix`)} 
                    inner_class="box box-image"
                    backColor="#F5E0C3"
            />

            <div className="box prediction-table">
            <table style={{
                width: '100%',
                height: '100%',
                borderCollapse: 'collapse',
                textAlign: 'center',
              }}>
                <thead style={{
                  backgroundColor: '#004466',
                  color: '#FFFFFF',
                }}>
                  <tr>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>Class</th>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>Precision</th>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>Recall</th>
                    <th style={{ padding: '2px', border: '1px solid #dddddd' }}>F1-Score</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row, index) => (
                    <tr key={index}>
                      <td style={{ padding: '2px', border: '1px solid #dddddd' }}>{row.class}</td>
                      <td style={{ padding: '2px', border: '1px solid #dddddd' }}>{row.precision}</td>
                      <td style={{ padding: '2px', border: '1px solid #dddddd' }}>{row.recall}</td>
                      <td style={{ padding: '2px', border: '1px solid #dddddd' }}>{row.f1Score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='box box-image' style={{ backgroundColor : '#F5E0C3' }}>
              <a href={`${process.env.PUBLIC_URL}/robots.txt`} download="placeholder.txt" style={{display:'flex', alignContent:'center', justifyContent:"center"}}>
                <img src={paper_image} alt="Paper Image" className='image'/>
              </a>
            </div>

          </div>
        </div>

      </div>


    </div>
  );
}

export default DisplayPage;