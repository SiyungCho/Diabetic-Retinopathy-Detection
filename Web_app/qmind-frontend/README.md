# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



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
          <Link to="/terms">Terms Of Use</Link>
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

.display-container {
    background-color: #ffffff;
    height: 100vh;
    padding-bottom: 20vh;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .prediction-result {
    padding: 10px;
    text-align: center;
  }
  
  .image-container, .graph-container, .table-container {
    padding: 8px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 99%;
  }
  
  .image, .graph{
    max-width: 100%;
    max-height: 99%;
    height: auto;
    object-fit: cover;
  }

  .custom-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  .custom-table th, .custom-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .custom-table th {
    background-color: #f2f2f2;
  }
  
  /* Responsive adjustments for smaller screens */
  @media (max-width: 600px) {
    .image-container, .graph-container, .table-container {
      padding: 5px;
    }
  
    .image, .graph {
      max-width: 100%;
      height: auto;
    }
  
    .custom-table {
      width: 100%;
      margin-top: 5px;
    }
  
    .custom-table th, .custom-table td {
      padding: 4px;
    }
  }

  .flip-card {
    position: relative;
    width: 100%; /* or a specific width, but ensure consistency */
    height: 100%; /* or a specific height, as needed */
    cursor: pointer;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  
  .flip-card-back {
    transform: rotateY(180deg);
  }
  
  .flip-card-inner.is-flipped {
    transform: rotateY(180deg);
  }