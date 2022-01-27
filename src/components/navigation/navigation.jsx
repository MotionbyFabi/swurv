import React, { Component }  from "react";
import './navigation.css';
import logoanim from './logoanimsmall.gif'
import twitter from './twitter.png'
import hamburger from './white-hamburger.svg'
import { Outlet, Link } from "react-router-dom";

class Navigation extends React.Component {
    state = { isActive: false };

    handleToggle = () => {
      this.setState({ isActive: !this.state.isActive });
     
    };
    

        render(){
            const isActive = this.state.isActive;
            return(
                <div>
                    <nav className="nav">
                        <img className="logo" src={ logoanim }  alt="logo" />
                        <img src={hamburger} alt="menu-logo" className={isActive ? "open" : "closed"}  onClick={this.handleToggle} />
                        <ul className="nav-ul">
                            <li className="nav-li"><Link to="">Home</Link></li>
                            <li className="nav-li"><Link to="/about">About Me</Link></li>
                            <li className="nav-li"><Link to="/work">Work</Link></li>
                            <li className="nav-li"><Link to="/worked-with">Who I've Worked With</Link></li>
                            <a href="https://twitter.com/swurvcreates"><img className="twitter" src={ twitter }  alt="logo" /></a>
                        </ul> 
                        
                    </nav>
                <Outlet />
                </div>
            );
            
        };   
    }

export default Navigation;
