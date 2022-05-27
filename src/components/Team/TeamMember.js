import React from 'react'

const TeamMember = (props) => {
  const teamMember=props.teamMember;
  const img=props.img;
  return (<>
    {/* {console.log("inside")} */}
    {console.log(teamMember)}
    <div>Name: {teamMember.name}</div>  
    <div>Email: {teamMember.email}</div>
    <div>Mobile Number: {teamMember.mobileNo}</div>
    <div>Designation: {teamMember.designation}</div>
    {/* {console.log("Base64",JSON.stringify(teamMember.img.data.toString('base64')))} */}
    <img style= {{maxWidth:"250px",maxHeight:"250px"}}src={`data:image/${teamMember.img.contentType};base64,${img}`}></img>
    </>
  )
}

export default TeamMember