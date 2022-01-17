import react from "react";
import './work.css';



const Work = ({url, onProgress}) => {
      return (
        <div>
          <iframe src="https://player.vimeo.com/video/581632727?h=7b31e540d6" width="1000" height="562,50" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          <iframe src="https://player.vimeo.com/video/581633680?h=a8a113cc94" width="1000" height="562,50" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
};



export default Work;