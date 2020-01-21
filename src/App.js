import React from 'react';
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import './App.css';

const App = () => {
  return(
    <>
    <div className="main-home-container">
      <div className="main-sidebar-container">
        <Sidebar />
      </div>
      <div className="home-container">
        <Home />
      </div>
    </div>
  </>
  );
};

export default App;
