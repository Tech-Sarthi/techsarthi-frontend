import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img src="./footer_logo.svg" />
      </div>
      <div className="contact-box">
        <div className="contact-us">Contact Us</div>
        <div>
          <img src="call_icon.svg" />
          <div>01332-285378</div>
        </div>
        <div>
          <img src="mail.svg" />
          <div>175years.techsarthi@iitr.ac.in</div>
        </div>
      </div>
    </div>
  );
}
