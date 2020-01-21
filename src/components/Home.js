import React, { useState, useEffect, } from "react";
import aleem from "../images/aleem.png";
import "../App.css";

const Home = () => {

  const [width, setWidth] = useState(window.innerWidth);

  const useWindowWidth = () => {
  
    useEffect( () => {
      const handleResize = () => setWidth(window.innerWidth);    
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });
  
    return width;
  }
  const size = useWindowWidth();

  return(
    <>
    <div className="home">
      <div className="adobe-opener">
        <h1 className="hi-adobe">Hey Adobe,</h1>
        <p className="aleem-text">
          my name is Aleem Pathamamvong a Full-Stack 
        </p>
      </div>
        <a href="https://adobe.com">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000"  stroke-linecap="round" stroke-linejoin="round" className="home-icon">
            <title>Adobe icon</title>
            <path d="M15.1 2H24v20L15.1 2zM8.9 2H0v20L8.9 2zM12 9.4L17.6 22h-3.8l-1.6-4H8.1L12 9.4z"/>
          </svg>
        </a>
    </div>
    <div className="new-line">
      { size <= 600 ? <><p>I'm Aleem Pathammavong</p> <img src={aleem} /></> : 
      <p className="aleem-text">
        Web-developer
      </p>
      }
    </div>
    </>
  );
};

export default Home; 