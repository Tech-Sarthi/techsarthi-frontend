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
      <div className="contact-form">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
