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
                <NavLink id="project" to="/projects">
                    WHAT WE DO
                </NavLink>
                </li>
                <li>
                <NavLink id="tinkerNext" to="/team">
                    OUR TEAM
                </NavLink>
                </li>
                <li id="faq">
                <NavLink to="/projects"> PROJECTS </NavLink>
                </li>
            </ul>
            </span>
        </div>
        );
}

export default Header;