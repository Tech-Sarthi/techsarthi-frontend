import React from "react";
import { useState } from "react";
import Popup from "../popup/popup";
import "./projectCard.scss";

export default function Card(props) {
  const [buttonPopup, setbuttonPopup] = useState(false);
  return (
    <>
      <div className="card-box">
        <div className="card-description">
          <div className="project-pic">
            <img src={props.src} alt="project picture" />
          </div>
          <div className="project-title">
            <div className="project-name">{props.name}</div>
            <div className="project-like">
              <img src="/like.jpg" />
            </div>
          </div>
          <div className="project-card-description">
            <h6>{props.title}</h6>
            {props.description}
          </div>
          <div className="faculty-in-charge">Faculty Incharge</div>
          <div className="faculty-name">{props.faculty}</div>
          {/* <div className="line"></div> */}
        </div>
        <button className="more-details" onClick={() => setbuttonPopup(true)}>
          More Details
        </button>
      </div>
      <Popup
        trigger={buttonPopup}
        setTrigger={setbuttonPopup}
        name={props.name}
        title={props.title}
        faculty="Vishal"
        description={props.description}
        outcome={props.outcome}
      />
    </>
  );
}
