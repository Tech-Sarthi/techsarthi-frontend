import React from "react";
import "./contact.scss";
import Card from "../../components/profileCard/profileCard";
import Carousell from "../../components/Carousel/Carousell";

function Contact() {
  const profList = [
    {
      name: "A K Dwivedi",
      dept: "Mechanical and Industrial Enginnering",
      mail: "xyz@iitr.ac.in",
      phone: "9993334448",
      link: "www.iitr.ac.in",
      tags: ["abcd", "efgh", "etc"],
      src: "D:ProjectTechSarthi-WebsiteclientpublicprofilePic.jpg",
    },
    {
      name: "Nimit Rathore",
      dept: "Mechanical and Industrial Enginnering",
      mail: "xyzzsdasdads@iitr.ac.in",
      phone: "9993334448",
      link: "www.iitr.ac.in",
      tags: ["abcd", "efgh", "etc"],
      src: "D:ProjectTechSarthi-WebsiteclientpublicprofilePic.jpg",
    },
    {
      name: "Ashana Sharan",
      dept: "Mechanical and Industrial Enginnering",
      mail: "xyz@iitr.ac.in",
      phone: "9993334448",
      link: "www.iitr.ac.in",
      tags: ["abcd", "efgh", "etc"],
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
