import './homepage.css';
import './displayPage.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid, Paper, Typography, Container } from '@mui/material';

function FlipCard({ front, back, containerclass }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (

    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`} >
        <div className="flip-card-front">
          <Paper elevation={3} className={`${containerclass}`}>
            {front}
          </Paper>
        </div>
        <div className="flip-card-back">
          <Paper elevation={3} className={`${containerclass}`}>
            {back}
          </Paper>
        </div>
      </div>
    </div>
  );
}

function DisplayPage() {
  const location = useLocation();
  const { accuracy, metrics, prediction, graphs } = location.state;

  const renderGraph = (value, index, specclass) => (
    <img src={`data:image/png;base64,${value}`} alt={`Graph ${index+1}`} className={`${specclass}`}/>
  );

  const renderBackContent = (content) => (
    <Typography variant="body1" color="common.black">
      {content}
    </Typography>
  );

  return (
    <div className="display-container">
      <header className="header">
        <Link to="/"><nav className="logo">Home</nav></Link>
        <nav className="nav">
          <Link to="/faq">FAQ</Link>
        </nav>
      </header>

      <Container maxWidth="lg" style={{ marginTop: '10px', backgroundColor:'' }}>
        <Grid container spacing={3} style={{backgroundColor:'' }}>

          <Grid item xs={12}>
            <Paper elevation={3} className="prediction-result">
              <Typography variant="h4" gutterBottom>
                Prediction Result
              </Typography>
              <Typography variant="h5">{prediction}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={7} md={4} style={{height: '350px'}}>
            <Paper elevation={3} className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Precision</th>
                    <th>Recall</th>
                    <th>F1-Score</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row, index) => (
                    <tr key={index}>
                      <td>{row.class}</td>
                      <td>{row.precision}</td>
                      <td>{row.recall}</td>
                      <td>{row.f1Score}</td>
                    </tr>
                  ))}
                </tbody>
                <thead>
                  <tr>
                    <th></th>
                    <th>Accuracy</th>
                    <th></th>
                    <th>Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Training</td>
                    <td>0.99</td>
                    <td>Validation</td>
                    <td>{accuracy}</td>
                  </tr>
                </tbody>
              </table>
            </Paper> 
          </Grid>

          <Grid item xs={5} md={5}>
            <FlipCard 
                  front={renderGraph(graphs[1], 1, 'graph')} 
                  back={renderBackContent(`Details about Graph ${1 + 1}`)} 
                  containerclass="graph-container"
            />
          </Grid>

          <Grid item xs={6} md={3}>
            <FlipCard 
                  front={renderGraph(graphs[4], 4, 'image')} 
                  back={renderBackContent(`Details about Graph ${4 + 1}`)} 
                  containerclass="image-container"
            />
          </Grid>

          <Grid item xs={6} md={4} style={{height: '300px' }}>
            <FlipCard 
                  front={renderGraph(graphs[2], 2, 'image')} 
                  back={renderBackContent(`Details about Graph ${2 + 1}`)} 
                  containerclass="image-container"
            />
          </Grid>
          
          <Grid item xs={6} md={4}>
            <FlipCard 
                  front={renderGraph(graphs[0], 0, 'image')} 
                  back={renderBackContent(`Enhanced Image Version of inputted image.`)} 
                  containerclass="image-container"
                />
          </Grid>

          <Grid item xs={12} md={4}>
            <FlipCard 
                  front={renderGraph(graphs[3], 3, 'graph')} 
                  back={renderBackContent(`Details about Graph ${3 + 1}`)} 
                  containerclass="graph-container"
            />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default DisplayPage;