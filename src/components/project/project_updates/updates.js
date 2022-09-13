import React,{useEffect,useState} from "react";
import axios from "axios";

import './updates.scss'
import Card from "../../projectCard/projectCard";

function Update() {

    const [projects, setProjects] = useState();
    const url = "http://localhost:8000/";

    useEffect(() => {
        axios.get(`${url}api/projects`).then((response) => {
            setProjects(response.data);
        });
    }, []);
    console.log(projects)

    return (
        <div className="project-list">
            {projects.map(item => (
                <Card
                src="/project.png"
                name={item.name_of_industry}
                description={item.problem_faced}
                faculty="Vishal"
              />
            ))}
        </div>
    );
}
export default Update;
