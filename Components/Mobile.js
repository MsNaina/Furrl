"use client";

import React from 'react';
import { useState , useEffect } from 'react';
import './Mobile.css';
const Bluelady= "/Bluelady.png"
const MobileMockup = () => {

      const [animate, setAnimate] = useState(false);

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //   setAnimate(true);
    //   }, 200); // Delay before starting animation
    //   return () => clearTimeout(timeout);
    // }, []);

  return (

    <div className={`outer-wrapper ${animate ? 'expand' : ''} 
      ${showMobileLady ? 'fade-in' : 'fade-out'}`}>

    <div className="mockup-container">
      <img src="/phone.png" alt="Mobile Frame" className="phone-frame" />
      
      <div className="screen-content">

        <div className='top-bar'>
            <div className='top-left'>
                 <p>9:15</p>
            </div>
            <div className='top-right'>
                <i class="fa-solid fa-signal"></i>
                <i class="fa-solid fa-wifi"></i>
                <i class="fa-solid fa-battery-three-quarters"></i>
            </div>
            
            
        </div>
        <h1 className="logo">Furrl</h1>

        <div className="product-section">
          <h3>#BrunchCulture</h3>
          <img src={Bluelady} alt="Model 1" className="model-img" />
          <button className="look-btn">Explore the Look</button>
        </div>

        <div className="product-section">
          <h3>#VacayAddOns</h3>
          <img src="/model2.png" alt="Model 2" className="model-img" />
        </div>
      </div>
    </div>
</div>
  );
};

export default MobileMockup;
