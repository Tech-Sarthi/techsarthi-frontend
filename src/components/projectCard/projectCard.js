import React from "react";
import "./projectCard.scss";

export default function Card(props) {
  return (
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
        <div className="project-card-description">{props.description}</div>
        <div className="faculty-in-charge">Faculty Incharge</div>
        <div className="faculty-name">{props.faculty}</div>
        <div className="line"></div>
      </div>
      <div className="tag-box">
        {props.tags.map((item, key) => (
          <div className="tag" id={key}>
            {item}
          </div>
        ))}
      </div>
      <button className="more-details">More Details</button>
    </div>
  );
}
