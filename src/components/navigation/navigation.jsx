import react from "react";
import './navigation.css';

export const navigation = () => (
   <navigation  className="nav">
       <img className="logo" src="#" alt="logo" />
       <ul className="nav-ul">
           <li className="nav-li"><a href="#">Home</a></li>
           <li className="nav-li"><a href="#">About Me</a></li>
           <li className="nav-li"><a href="#">My Work</a></li>
           <li className="nav-li"><a href="#">Who I've Worked With</a></li>
       </ul>
   </navigation>
)