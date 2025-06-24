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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMobileLady, setShowMobileLady] = useState(false);

  useEffect(() => {
    setShowBubble(true);
    setIsTransitioning(true);

  const timer = setTimeout(() => {
    setPhase("after");
    // }, 1600);
    setTimeout(() => {
      setShowMobileLady(true);
    }, 2000);
  }, 1600); 

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      <div
        className={`grid ${isTransitioning ? "transitioning" : ""} ${
          phase === "after" ? "after-bubble after" : ""
        }`}
      >
        {showBubble && (
          <div className="bubble-shadow">
            <div className="bubble-overlay"></div>
          </div>
        )}

        <div
          id="home-text"
          className={`home-text ${phase === "after" ? "fade-out" : "fade-in"}`}
        >
          <h1 className="home-heading">Welcome</h1>
          <h1 className="heading-transition">
            <span className="signature-text">to a</span> World <br />
            <span className="of-text">of</span>
          </h1>
        </div>

        <div
          id="home-text"
          className={`home-text-blue ${
            phase === "after" ? "fade-in" : "fade-out"
          }`}
        >
          <h1 className="heading-transition-blue">
            <span className="signature-text-style">Stylish</span> Homegrown{" "}
            <br />
            <span className="of-text">brands</span>
          </h1>
        </div>

        <img
          src={homeGirl}
          className={`pinkLady ${phase === "after" ? "fade-out" : "fade-in"}`}
        />
        {/* <img
          src={BlueGirl}
          className={`blueLady ${phase === "after" ? "fade-in" : "fade-out"}`}
        /> */}
        <img
          src={BlueGirl}
          className={`blueLady ${
            phase === "after" && !showMobileLady ? "fade-in" : ""
          } ${showMobileLady ? "shrink-to-mobile" : ""}`}
        />

        <div className="flower-orange">
          <img src={flower} className="flower" alt="flower" />
          <img
            src={orangebg}
            className={`orange-bg ${phase === "after" ? "after" : ""}`}
            alt="orange bg"
          />
        </div>

        <img src={orange} className="orange" alt="orange" />
        <div>
          <MobileMockup />
        </div>
      </div>
    </>
  );
}

export default Header