import React, { useContext } from "react";
import Form from "../../components/form/form.js";
import Carousell from "../../components/Carousel/Carousell";
import "./contact.scss";
import { ThemeContext } from "../../App.js";

function Contact() {
  const { value1, value2 } = useContext(ThemeContext);
  const [page, setPage] = value2;
  setPage(1);
  console.log(value1);
  return (
    <div className="contact">
      <div className="contact-form">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
