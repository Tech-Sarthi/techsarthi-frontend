import React,{useEffect,useState} from "react";
import {useLocation} from "react-router-dom";
import Search from "../../components/Search_box/Search"
import {searchQuery} from "../../functions/projects";

function Projects(){
    const { search } = useLocation();

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

import "./projects.scss";
import Card from "../../components/projectCard/projectCard";
import Carousell from "../../components/Carousel/Carousell";

function Projects() {
  const profList = [
    {
      name: "Metal 3D Printer",
      tags: ["abcd", "efgh", "etc"],
      description:
        "Target of the project is to develop a working 3-D printer which can cater the need of small automobile parts in industry. ",
      faculty: "Mr. Vishal",
    },
    {
      name: "Metal 3D Printer",
      tags: ["abcd", "efgh", "etc"],
      description:
        "Target of the project is to develop a working 3-D printer which can cater the need of small automobile parts in industry. ",
      faculty: "Mr. Vishal",
    },
    {
      name: "Metal 3D Printer",
      tags: ["abcd", "efgh", "etc"],
      description:
        "Target of the project is to develop a working 3-D printer which can cater the need of small automobile parts in industry. ",
      faculty: "Mr. Vishal",
    },
    {
      name: "Metal 3D Printer",
      tags: ["abcd", "efgh", "etc"],
      description:
        "Target of the project is to develop a working 3-D printer which can cater the need of small automobile parts in industry. ",
      faculty: "Mr. Vishal",
    },
  ];
  const [loggedIn, setLogin] = useState(false);
  const login = useCallback(() => {
    if (loggedIn === true) {
      setLogin(false);
    } else {
      setLogin(true);
    }
    console.log(loggedIn);
  });
  return (
    <div className="project">
      <div className="project-header">
        <Carousell header="FOR STUDENTS" name="PROJECT LIST" height="400px" />
      </div>
      <div className="project-login">
        <button onClick={login}>{loggedIn ? "LOG OUT" : "LOG IN"}</button>
      </div>
      <div className="project-description">
        <div className="project-description-header">
          Tech Sarthi for Students
        </div>
        <div className="line"></div>
        <div className="project-description-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex{" "}
        </div>
      </div>
      {loggedIn ? (
        <div className="project-list">
          {profList.map((item, key) => (
            <Card
              src="/project.png"
              name={item.name}
              tags={item.tags}
              description={item.description}
              faculty={item.faculty}
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Projects;