import React from "react";
import "./profileCard.scss";

export default function Card(props) {
  return (
    <div className="profile-card-box">
      <div className="profile-card-description">
        <div className="profile-pic">
          <img src={props.src} alt="profile picture" />
        </div>
        <div className="profile-name">{props.name}</div>
        <div className="dept-name">{props.dept}</div>
      </div>
      <div className="contact-details">
        <div className="contact-details-item">
          <img src="/mail_icon.svg" height={20} width={20} />
          <div className="mail">{props.mail}</div>
        </div>
        <div className="contact-details-item">
          <img src="/phone_icon.svg" height={20} width={20} />
          <div className="phone">{props.phone}</div>
        </div>
        <div className="contact-details-item">
          <img src="/link_icon.svg" height={20} width={20} />
          <div className="link">{props.link}</div>
        </div>
        <div className="line"></div>
      </div>
      <button className="view-profile">View Profile</button>
    </div>
  );
}
