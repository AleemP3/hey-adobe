import React from 'react';
import "../App.css";

const Home = () => {
  return(
    <div className="home">
      <h1 className="hi-adobe">Hey Adobe, 
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000"  stroke-linecap="round" stroke-linejoin="round" className="home-icon">
          <title>Adobe icon</title>
          <path d="M15.1 2H24v20L15.1 2zM8.9 2H0v20L8.9 2zM12 9.4L17.6 22h-3.8l-1.6-4H8.1L12 9.4z"/>
        </svg>
      </h1>
    </div>
  );
};

export default Home; 