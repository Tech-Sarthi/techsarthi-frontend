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
  const { value1, value2 } = useContext(ThemeContext);
  const [page, setPage] = value2;
  const temp = localStorage.getItem("loggedIn");
  // console.log("VALUES", value.value1, value.value2);
  const [loggedIn, setLogin] = useState(
    temp == null ? false : temp == "false" ? false : true
  );
  const handleClick = useCallback(() => {
    // console.log("CHECKK", "Initial loggedIn", loggedIn);
    if (loggedIn) {
      setLogin(false);
    } else setLogin(true);
    // console.log("CHECKK", "handleClick works", loggedIn);
  });
  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    // console.log(
    //   "CHECKK",
    //   "localvalue",
    //   localStorage.getItem("loggedIn"),
    //   loggedIn
    // );
  }, [loggedIn, temp]);

  return (
    <div id="heade" className="heade">
      <div className="navList">
        <a id="home" href="/" className={`element${page == 0}`}>
          Tech Sarthi
        </a>
        <a id="contact" href="/contact" className={`element${page == 1}`}>
          Contact Us
        </a>
        <a id="team" href="/team" className={`element${page == 2}`}>
          Our Team
        </a>
        <a id="projects" href="/projects" className={`element${page == 3}`}>
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
