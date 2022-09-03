import './App.css';
import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {Layout, Typography, Space} from "antd";

import Homepage from "./components/Homepage/Homepage"
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (

      <div className="App">
        <div className="navbar">
          <Navbar/>
        </div>
      </div>

  );
}

export default App;
