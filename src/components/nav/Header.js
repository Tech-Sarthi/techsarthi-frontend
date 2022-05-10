import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";


const Header=()=>{
    return (
        <div id="heade" className="heade">
            
            <span id="nav" className="nav_array">
            <ul className="nav">
                <li id="home">
                <NavLink exact={true} to="/">
                    TECH SARTHI
                </NavLink>
                </li>
                <li>
                <NavLink id="about" to="/about">
                    WHAT WE DO
                </NavLink>
                </li>
                <li id="projects">
                <NavLink to="/projects"> FOR STUDENTS </NavLink>
                </li>
                <li>
                <NavLink id="contact" to="/contact">
                    CONTACT US
                </NavLink>
                </li>
                
            </ul>
            </span>
        </div>
        );
}

export default Header;