import React, { useCallback, useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../App.js";
// import { useLocation } from "react-router-dom";
// import Search from "../../components/Search_box/Search";
// import { searchQuery } from "../../functions/projects";

// function Projects(){
//     const { search } = useLocation();

//     useEffect(()=>{
//         let query=new URLSearchParams(search);
//         searchQuery(query.get("search"))
//         .then(res=>{
//             console.log(res.data);
//         })
//     },[search])
//     // const [query,setQuery]=useState()
//     return (
//         <div>
//             <h1>Projects</h1>
//             <Search />
//         </div>
//     );
// }

// export default Projects;

import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./projects.scss";
import Carousell from "../../components/Carousel/Carousell";
import Update from "../../components/project/project_updates/updates";

function Projects() {
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

  var user = auth.currentUser;
  console.log(user);
  const { value1, value2 } = useContext(ThemeContext);
  const [loggedin, setLogin] = value1;
  const handleLogin = useCallback(() => {
    if (loggedin) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  });

  const [page, setPage] = value2;
  setPage(3);
  console.log(value1);
  return (
    <div className={loggedin ? "project-login" : "project-logout"}>
      {/* <div className="project-header">
        <Carousell header="FOR STUDENTS" name="PROJECT LIST" height="400px" />
      </div>
      {user ? (
        <Update/>
      ) : (
        
        <List/>
      )} */}
      {loggedin && <Update />}
      {!loggedin && (
        <button className="login-button" onClick={handleLogin}>
          Log In with Channel-i
        </button>
      )}
    </div>
  );
}

export default Projects;
