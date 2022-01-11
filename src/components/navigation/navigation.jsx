import react from "react";
import './navigation.css';
import logoanim from './logoanim.gif'
import twitter from './twitter.png'
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
        return(
            <div>
            <nav className="nav">
                <img className="logo" src={ logoanim }  alt="logo" />
                <ul className="nav-ul">
                    <li className="nav-li"><Link to="/home">Home</Link></li>
                    <li className="nav-li"><Link to="/about">About Me</Link></li>
                    <li className="nav-li"><Link to="/work">Work</Link></li>
                    <li className="nav-li"><Link to="/worked-with">Who I've Worked With</Link></li>
                    <a href="https://twitter.com/swurvcreates"><img className="twitter" src={ twitter }  alt="logo" /></a>
                </ul>
            </nav>

            <Outlet />

            </div>
        );   
    }

export default Navigation;


