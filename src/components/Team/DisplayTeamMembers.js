import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import TeamMember from "./TeamMember";
import {url_header} from "../../const"

const DisplayTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [imgData,setImgData]=useState([]);
  useEffect(() => {
    fetch(`${url_header}/api/teamMember`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.teamMembers);
        setTeamMembers(json.teamMembers);
        setImgData(json.imgData)
      });
  }, []);
  return (
    <>
      {teamMembers.map((teamMember, index) => (
        <TeamMember
          key={teamMember._id}
          teamMember={teamMember}
          img={imgData[index]}
        />
      ))}
    </>
  );
};

export default DisplayTeamMembers;
