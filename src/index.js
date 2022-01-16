import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Work from "./components/work/work";
import Worked from "./components/worked/worked";
import Navigation from './components/navigation/navigation';



ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} >
              <Route index path='' element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/worked-with" element={<Worked />} />
          </Route>
        </Routes>
      </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
