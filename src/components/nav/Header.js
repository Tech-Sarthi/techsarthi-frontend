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
      <button id="login">Log In</button>
    </div>
  );
};

export default Header;
