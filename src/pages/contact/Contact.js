import React from "react";

function Contact() {
  const profList = [
    {
      name: "Prof.Amit Chodhary",
      dept: "West Block, Mechanical and Industrial Department, IIT Roorkee",
      mail: "amit.choudhary@me.iitr.ac.in",
      phone: "01332-284696",
      link: "www.iitr.ac.in",
      tags: [],
      src: "D:ProjectTechSarthi-WebsiteclientpublicprofilePic.jpg",
    },
    {
      name: "Prof. Shushil Kumar",
      dept: "Chemical Engineering Department, IIT Roorkee",
      mail: "shushil@ch.iitr.ac.in",
      phone: "01332-284944",
      link: "www.iitr.ac.in",
      tags: [],
      src: "D:ProjectTechSarthi-WebsiteclientpublicprofilePic.jpg",
    },
    {
      name: "Prof. Soma Rohtagi",
      dept: "Biosciences and Bioengineering Department, IIT Roorkee",
      mail: "soma.rohatgi@bt.iitr.ac.in",
      phone: "01332-284831",
      link: "www.iitr.ac.in",
      tags: [],
      src: "D:ProjectTechSarthi-WebsiteclientpublicprofilePic.jpg",
    },
    {
      name: "Prof. Meenakshi Rawat",
      dept: "Electronics and Communication Engineering Department, IIT Roorkee",
      mail: "meenakshi.rawat@ece.iitr.ac.in",
      phone: "01332-284808",
      link: "www.iitr.ac.in",
      tags: [],
      src: "D:ProjectTechSarthi-WebsiteclientpublicprofilePic.jpg",
    },
    {
      name: "Prof. Akshay Dvivedi",
      dept: "West Block, Mechanical and Industrial Department, IIT Roorkee",
      mail: "akshaydvivedi@me.iitr.ac.in",
      phone: "01332-285428",
      link: "www.iitr.ac.in",
      tags: [],
      src: "D:ProjectTechSarthi-WebsiteclientpublicprofilePic.jpg",
    },
    {
      name: "Vishal",
      dept: "SRIC Department, IIT Roorkee",
      mail: "vishal.techsarthi@sric.iitr.ac.in",
      phone: "01332-285378",
      link: "www.iitr.ac.in",
      tags: [],
      src: "D:ProjectTechSarthi-WebsiteclientpublicprofilePic.jpg",
    },
  ];
  return (
    <div className="contact">
      <div className="contact-header">
        <Carousell header="TECH SARTHI" name="CONTACT US" height="400px" />
      </div>
      <div className="contact-list">
        {profList.map((item, key) => (
          <Card
            src="/profilePic.jpg"
            name={item.name}
            dept={item.dept}
            mail={item.mail}
            phone={item.phone}
            link={item.link}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
