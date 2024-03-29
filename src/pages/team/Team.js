import React, { useContext } from "react";
import "./team.scss";
import Card from "../../components/profileCard/profileCard";
import Carousell from "../../components/Carousel/Carousell";
import { ThemeContext } from "../../App.js";
//import DisplayTeamMembers from "./DisplayTeamMembers";

function Team() {
  const profList = [
    {
      name: "Prof. Meenakshi Rawat",
      dept: "Electronics and Communication Engineering Department, IIT Roorkee",
      mail: "meenakshi.rawat@ece.iitr.ac.in",
      phone: "01332-284808",
      link: "www.iitr.ac.in",
      tags: [],
      src: require("../../media/Team/meenakshi.jpg"),
    },
    {
      name: "Prof.Amit Chodhary",
      dept: "West Block, Mechanical and Industrial Department, IIT Roorkee",
      mail: "amit.choudhary@me.iitr.ac.in",
      phone: "01332-284696",
      link: "www.iitr.ac.in",
      tags: [],
      src: require("../../media/Team/amit.jpg"),
    },
    {
      name: "Prof. Shushil Kumar",
      dept: "Chemical Engineering Department, IIT Roorkee",
      mail: "shushil@ch.iitr.ac.in",
      phone: "01332-284944",
      link: "www.iitr.ac.in",
      tags: [],
      src: require("../../media/Team/sushil.jpg"),
    },
    {
      name: "Prof. Soma Rohtagi",
      dept: "Biosciences and Bioengineering Department, IIT Roorkee",
      mail: "soma.rohatgi@bt.iitr.ac.in",
      phone: "01332-284831",
      link: "www.iitr.ac.in",
      tags: [],
      src: require("../../media/Team/soma.jpg"),
    },
    {
      name: "Prof. Akshay Dvivedi",
      dept: "West Block, Mechanical and Industrial Department, IIT Roorkee",
      mail: "akshaydvivedi@me.iitr.ac.in",
      phone: "01332-285428",
      link: "www.iitr.ac.in",
      tags: [],
      src: require("../../media/Team/akshay.jpg"),
    },
    {
      name: "Vishal",
      dept: "Project Officer, Main building, IIT Roorkee",
      mail: "vishal.techsarthi@sric.iitr.ac.in",
      phone: "01332-285378",
      link: "www.iitr.ac.in",
      tags: [],
      src: require("../../media/Team/vishal.jpg"),
    },
  ];
  const { value1, value2 } = useContext(ThemeContext);
  const [page, setPage] = value2;
  setPage(2);
  console.log(value1);
  return (
    //<DisplayTeamMembers/>
    <div className="team">
      {profList.map((item, key) => (
        <Card
          src={item.src}
          name={item.name}
          dept={item.dept}
          mail={item.mail}
          phone={item.phone}
          link={item.link}
          tags={item.tags}
        />
      ))}
    </div>
  );
}

export default Team;
