import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar.js';
import Main from './Main.js';
import About from './About.js';
import Pricing from './Pricingsec.js';
import Profile from './Profile.js';
import AirbnbNav from './AirbnbNav.js';
import AirbnbCard from './AirbnbCard.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <About />
    <Pricing />
    <Profile />
    <AirbnbNav />
    <AirbnbCard />
  </React.StrictMode>
);

reportWebVitals();
