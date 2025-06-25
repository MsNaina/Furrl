"use client";
import React, { useState, useEffect } from "react";
import "./Mobile.css";
const Bluelady = "/Bluelady.png";

const MobileMockup = ({ showMobileLady, phase }) => {
  const [animate, setAnimate] = useState(false);
  const [initialVisible, setInitialVisible] = useState(true);  

  useEffect(() => {
    console.log("lady:", animate);
  }, [animate]);

  useEffect(() => {
    if (showMobileLady) {
      setAnimate(true);
      setTimeout(() => {
        setInitialVisible(false);
      }, 1000);
    }
  }, [showMobileLady]);

  return (
    <>
      {!animate && (
        <div
          className={`outer-wrapper-initial ${
            animate ? "fade-out" : "fade-in"
          }`}
        >
          <div className="mockup-container">
            <img src="/phone.png" alt="Mobile Frame" className="phone-frame" />
            <div className="screen-content">
              <div className="top-bar">
                <div className="top-left">
                  <p>9:15</p>
                </div>
                <div className="top-right">
                  <i className="fa-solid fa-signal"></i>
                  <i className="fa-solid fa-wifi"></i>
                  <i className="fa-solid fa-battery-three-quarters"></i>
                </div>
              </div>
              <h1 className="logo">Furrl</h1>
            </div>
          </div>
        </div>
      )}

      <div className={`outer-wrapper-expanded ${animate ? "expand" : ""}`}>
        <div className="mockup-container">
          <img src="/phone.png" alt="Mobile Frame" className="phone-frame" />
          <div className="screen-content">
            <div className="top-bar">
              <div className="top-left">
                <p>9:15</p>
              </div>
              <div className="top-right">
                <i className="fa-solid fa-signal"></i>
                <i className="fa-solid fa-wifi"></i>
                <i className="fa-solid fa-battery-three-quarters"></i>
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
    </>
  );
};

export default MobileMockup;

