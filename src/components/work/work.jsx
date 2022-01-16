import react from "react";
import './work.css';
import ReactPlayer from "react-player"
import Lesson from "./player"


const Work = ({url, onProgress}) => {
      return (
        <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={url}
          width="100%"
          height="100%"
          controls={true}
          onProgress={onProgress}
        />
        <Lesson />
      </div>
    );
};



export default Work;