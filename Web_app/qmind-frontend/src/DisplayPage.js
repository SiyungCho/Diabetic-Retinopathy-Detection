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

  const renderGraph = (value, index) => (
    <img src={`data:image/png;base64,${value}`} alt={`Graph ${index+1}`} className="graph"/>
  );

  const renderBackContent = (content) => (
    <Typography variant="body1" color="common.white">
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

      <Container maxWidth="lg" style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Paper elevation={3} className="prediction-result">
              <Typography variant="h4" gutterBottom>
                Prediction Result
              </Typography>
              <Typography variant="h5">{prediction}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} md={3}>
                <FlipCard 
                  front={renderGraph(graphs[0], 0)} 
                  back={renderBackContent(`Details about Graph ${0 + 1}`)} 
                  containerclass="image-container"
                />
          </Grid>

          <Grid item xs={6} md={6}>
            <Paper elevation={3} className="graph-container">
              <img src={`data:image/png;base64,${graphs[1]}`} alt="Graph 2" className="graph" />
            </Paper>
          </Grid>

          <Grid item xs={6} md={3}>
            <Paper elevation={3} className="image-container">
              <img src={`data:image/png;base64,${graphs[4]}`} alt="Graph 3" className="image" style={{height: 'fit-content'}}/>
            </Paper>
          </Grid>

          <Grid item xs={6} md={4}>
            <Paper elevation={3} className="image-container">
              <img src={`data:image/png;base64,${graphs[2]}`} alt="Graph 4" className="image" />
            </Paper>
          </Grid>
          
          <Grid item xs={6} md={4}>
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

          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="graph-container">
              <img src={`data:image/png;base64,${graphs[3]}`} alt="Graph 5" className="graph" />
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default DisplayPage;