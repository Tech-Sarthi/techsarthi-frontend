import React from "react";
import Form from "../../components/form/form.js";
import Carousell from "../../components/Carousel/Carousell";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <Carousell header="TECH SARTHI" name="CONTACT US" height="400px" />
      </div>
      <div className="contact-description">
        <div id="title">Tell us about your Problem !</div>
        <div id="description">
          TechSarthi is an IIT Roorkee’s endeavour for supporting Industrial
          Units in and around Roorkee. TechSarthi will focus on industries in
          175 km radius of IIT Roorkee to help them adopt technically sound
          solutions, gear up their growth and realize the objectives of going
          “Local to Global”. This scheme will spot opportunities for new
          products, services, markets, including assessing technology portfolio
          and intellectual property rights. The objective of this initiative is
          to make Roorkee region a highly efficient and effective industrial hub
          promoting investments and reducing migrations.
        </div>
      </div>
      <div className="contact-form">
        <Form />
      </div>
      <div className="contact-footer">
        <img className="logo-iitr" src="/logo-iitr.png" />
        <img className="logo-175" src="/logo-175.png" />
      </div>
    </div>
  );
}

export default Contact;
