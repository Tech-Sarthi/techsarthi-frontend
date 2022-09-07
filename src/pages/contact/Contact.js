import React from "react";
import "./contact.scss";
import Form from "../../components/form/form"
import Carousell from "../../components/Carousel/Carousell";
import './contact.scss'

function Contact() {
  
  return (
    <div className="contact">
    <div className="contact-header">
        <Carousell header="FOR STUDENTS" name="PROJECT LIST" height="400px" />
      </div>
      <Form/>

    </div>
  );
}

export default Contact;
