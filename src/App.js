import React, { Component } from 'react';
import './App.css';
import About from './components/about/about';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';

function App() {

    return (
      <div className="App">
        <Navigation />
        <Home />
        <About/>
      </div>
    
    );
}
export default App;
