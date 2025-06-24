"use client";

import {React , useState , useEffect} from 'react'
import './Header.css'
import MobileMockup from './Mobile'
const homeGirl = "/homeGirl.png";
const BlueGirl="/Bluelady.png"
const flower="/flower.png"
const orange ="/orangeStuff.png"
const orangebg = "/Orange.png"

const Header = () => {

  const [phase, setPhase] = useState('before');
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    setShowBubble(true);
  }, []);

  const handleBubbleEnd = () => {
    setPhase("after");
  };

  return (
    <>
      <div className={`grid ${phase === "after" ? "after-bubble after" : ""}`}>
        <div className="bubble-overlay" onAnimationEnd={handleBubbleEnd}></div>
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
            <div id="home-text" className="home-text-blue">
              <h1 className="heading-transition-blue">
                <span className="signature-text-style">Stylish</span> Homegrown <br />
                <span className="of-text">brands</span>
              </h1>
            </div>
            <img src={BlueGirl} className="blueLady" />
          </>
        )}

        <div className="flower-orange">
          <img src={flower} className="flower"></img>
          <img
            src={orangebg}
            className={`orange-bg ${phase === "after" ? "after" : ""}`}
          ></img>
        </div>

        <img src={orange} className="orange"></img>

        <div>
          <MobileMockup />
        </div>
      </div>
    </>
  );
}

export default Header