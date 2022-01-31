import React from 'react'
import ReactDOM from 'react-dom'
import './work.css';
import  AnimatedPage  from "./animation";



const Work = () => {
      return (
            <AnimatedPage className="wrapper">
            
              <iframe className="first" src="https://player.vimeo.com/video/581632727?h=7b31e540d6" width="1000" height="562,50" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              <iframe className="second"  src="https://player.vimeo.com/video/581633680?h=a8a113cc94" width="1000" height="562,50" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              
          </AnimatedPage>
    );
};



export default Work;