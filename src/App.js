import React, { Component } from 'react';
import './App.css';
import Work from './components/work/work';
import About from './components/about/about';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import { Outlet, Link } from "react-router-dom";


function App() {
    return (
      <div className="App">
        <Home />
        <About/>
        <Work />
        <Navigation />
        <Outlet />
      </div>
    );
}
export default App;
