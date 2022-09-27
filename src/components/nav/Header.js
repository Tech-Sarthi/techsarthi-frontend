import React, { useEffect, useState, useContext, useCallback } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { ThemeContext } from "../../App.js";

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
  const [loggedIn, setLogin] = useContext(ThemeContext);
  const handleClick = useCallback(() => {
    if (loggedIn) {
      setLogin(false);
    } else setLogin(true);
  });
  return (
    <div id="heade" className="heade">
      <div className="navList">
        <a id="home" href="/">
          Tech Sarthi
        </a>
        <a id="contact" href="/contact">
          Contact Us
        </a>
        <a id="team" href="/team">
          Our Team
        </a>
        <a id="projects" href="/projects">
          For Students
        </a>
      </div>
      <button id="login" onClick={handleClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Header;
