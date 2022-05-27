import React from "react";
import TeamMemberForm from "./adminComponents/TeamMemberForm";
import DisplayTeamMembers from "../../components/Team/DisplayTeamMembers";

const Admin = () => {
  return (
    <div>
      <h1>Ketan</h1>
      <DisplayTeamMembers/>
      <TeamMemberForm/>
    </div>
  );
};

export default Admin;
