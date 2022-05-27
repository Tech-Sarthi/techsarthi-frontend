import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import TeamMember from "./TeamMember";

const DisplayTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [imgData,setImgData]=useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/teamMember")
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
