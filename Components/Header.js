"use client";

import {React , useState , useEffect} from 'react'
import './Header.css'
import MobileMockup from './Mobile'
const homeGirl = "/homeGirl.png";
const BlueGirl="/Bluelady.png"
const flower="/flower.png"
const orange ="/orangeStuff.png"
const orangebg= "/Orange.png"
const bg="/bg.jpg"

const Header = () => {

  const [phase, setPhase] = useState('before');
  const [showBubble, setShowBubble] = useState(false);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowBubble(true);
  //   }, 100);
  // }, []);
  

  //   useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setPhase('after');
  //   }, 2000);
  //   return () => clearTimeout(timeout);
  //   }, []);
  

  return (
    <>
      <div className="grid">
        <div
          className={`gradient-layer ${showBubble ? "bubble-wipe" : ""}`}
        ></div>

        <div className="bubble-overlay"></div>

        {/* <div id="home-text" className={`home-text ${phase}`}>
          {phase === "before" ? (
            <>
              <h1 className="home-heading">Welcome</h1>
              <h1 className="heading-transition">
                {" "}
                <span className="signature-text">to a</span> World <br />{" "}
                <span className="of-text">of</span>
              </h1>
            </>
          ) : (
            <h1 className="heading-transition">
              <span className="signature-text">stylish</span> Homegrown <br />
              <span className="of-text">brand</span>
            </h1>
          )}
        </div>

        <img
          src={phase === "before" ? homeGirl : BlueGirl}
          className={phase === "before" ? "pinkLady" : "blueLady"}
          alt="girl"
        /> */}
        {phase === "before" ? (
          <>
            <div id="home-text">
              <h1 className="home-heading">Welcome</h1>
              <h1 className="heading-transition">
                <span className="signature-text">to a</span> World <br />
                <span className="of-text">of</span>
              </h1>
            </div>
            <img src={homeGirl} className="pinkLady" />
          </>
        ) : (
          <>
            <div id="home-text">
              <h1 className="heading-transition">
                <span className="signature-text">stylish</span> Homegrown <br />
                <span className="of-text">brand</span>
              </h1>
            </div>
            <img src={BlueGirl} className="blueLady" />
          </>
        )}

        <div className="flower-orange">
          <img src={flower} className="flower"></img>
          <img src={orangebg} className="orange-bg"></img>
        </div>

        <img src={orange} className="orange"></img>

        <div>
          <MobileMockup/>
        </div>
      </div>
    </>
  );
}

export default Header