import React, { Component } from 'react';
import './App.css';
import Work from './components/work/work';
import About from './components/about/about';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import { Outlet, Link } from "react-router-dom";
import {Circle} from 'react-preloaders';

function App() {
    return (
      <div className="App">
        <Circle />
        <Home />
        <About/>
        <Work />
        <Navigation />
        <Outlet />
      </div>
    );
}
export default App;