import React, {useEffect, useRef} from "react";
import logo from './logo.svg';
import './App.css';
import {gsap,Power3} from "gsap";
import { Link} from "react-router-dom";

function App() {
  let logoItem = useRef(null)
    let textItem = useRef(null)

  useEffect(() => {
    console.log(logoItem)
    gsap.to( // TweenMax kullanılıyordu deprecated
          logoItem,
          3, // süre
          {
              opacity:1,
              y:-20,
              ease:Power3.easeOut

          }
      )

      gsap.to( // TweenMax kullanılıyordu deprecated
          textItem,
          3, // süre
          {
              opacity:1,
              y:-20,
              ease:Power3.easeOut,
              delay:.3

          }
      )
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img ref={el => {logoItem = el}} src={logo} className="App-logo" alt="logo" />
        <p ref = {el => {textItem = el}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="video1"
          rel="noopener noreferrer"
        >
          Video 1
        </Link>
          <Link className="App-link" to="video2"  rel="noopener noreferrer">Video 2</Link>
          <Link className="App-link" to="video3"  rel="noopener noreferrer">Video 3</Link>


      </header>


    </div>
  );
}

export default App;
