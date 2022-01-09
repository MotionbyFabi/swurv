import React, { Component } from 'react';
import './App.css';
import './components/navigation/navigation.jsx'
import './components/footer/footer.jsx'
import { navigation } from './components/navigation/navigation.jsx';

function App() {

    return (
      <div className="App">
        <header>
          <img className="logo" src="/assets/" alt="logo" />
          <ul className="nav-ul">
              <li className="nav-li"><a href="#">Home</a></li>
              <li className="nav-li"><a href="#">About Me</a></li>
              <li className="nav-li"><a href="#">My Work</a></li>
              <li className="nav-li"><a href="#">Who I've Worked With</a></li>
          </ul>
        </header>
      </div>
    );
}
export default App;
