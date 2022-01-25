import React from 'react';
import './App.css';
import { Routes, Route, useLocation  } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Work from "./components/work/work";
import Worked from "./components/worked/worked";
import Navigation from './components/navigation/navigation';
import { AnimatePresence } from "framer-motion";



function App() {
    var location = useLocation()
    
    return (
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigation />} >
                    <Route index path='' element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/work" element={<Work />} />
                    <Route exact path="/worked-with" element={<Worked />} />
                </Route>
              </Routes>
            </AnimatePresence>
  );
}
export default App;