import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";


const Header = () => {
    var auth = getAuth();

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });
        // console.log(currentUser);
    }, [currentUser]);


    const logout = async () => {
        await signOut(auth);
    };

    var user = auth.currentUser;
    return (
        <div id="heade" className="heade">

            <span id="nav" className="nav_array">
                <ul className="nav">
                    <li id="home">
                        <NavLink exact={true} to="/">
                            TECH SARTHI
                        </NavLink>
                    </li>
                    <li id="contact">
                        <NavLink to="/contact">
                            CONTACT US
                        </NavLink>
                    </li>
                    <li id="team">
                        <NavLink to="/team">
                            OUR TEAM
                        </NavLink>
                    </li>
                    <li id="projects">
                        <NavLink to="/projects">
                            FOR STUDENTS
                        </NavLink>
                    </li>
                    <li id="login" classname="login-button">

                        {user ? (
                            <button onClick={logout} >
                                LOG OUT
                            </button>
                        ) :
                            (
                                <NavLink to="/login">
                                    LOG IN
                                </NavLink>)
                        }
                    </li>
                </ul>
            </span>
        </div>
    );
}

export default Header;