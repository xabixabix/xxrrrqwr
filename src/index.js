import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Rwr from './components/Rwr';
import About2 from './components/About2';



const root1 = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
  <Router>
  <Routes> 
      <Route path="/welcome" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about2" element={<About2 />} />
      <Route path="/" element={<App />} />
    </Routes>
    </Router>
  </React.StrictMode>
);

if (root2) {
  root2.render(
    <React.StrictMode>
    <Router>
    <Routes> 
        <Route path="/rwr" element={<Rwr />} />
      </Routes>
      </Router>
    </React.StrictMode>
  );
}
