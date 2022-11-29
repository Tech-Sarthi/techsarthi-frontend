import React, { useEffect, useState } from "react";
import axios from "axios";

import "./updates.scss";
import Card from "../../projectCard/projectCard";
import { url_header } from "../../../const";

function Update() {
  const [projects, setProjects] = useState();
  useEffect(() => {
    axios.get(`${url_header}api/projects`).then((response) => {
      setProjects(response.data);
    });
  }, []);
  console.log(projects);

  return (
    <div className="project-list">
      {projects &&
       projects.map(
          (item) =>
            item.verified && (
              <Card
                src="/project.png"
                name={item.name_of_industry}
                title={item.problem_faced}
                faculty="Vishal"
                description={item.other_details}
                outcome={item.expected_outcome}
              />
            )
        )}
    </div>
  );
}
export default Update;
