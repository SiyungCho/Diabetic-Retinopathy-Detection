import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './homePage';
import DisplayPage from './DisplayPage';
import FAQ from './FAQ';
import TERMS from './terms';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/display" element={<DisplayPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TERMS />} />
        </Routes>
    </Router>
  );
}

export default App;