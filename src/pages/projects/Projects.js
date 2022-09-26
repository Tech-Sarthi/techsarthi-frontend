import React, { useCallback, useEffect, useState } from "react";
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
import List from "../../components/project/project_list/list";
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

  const [loggedin, setLogin] = useState(false);
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
      <button className="project-login">Log In with Channel-i</button>
    </div>
  );
}

export default Projects;
