import React from "react";
import "./popup.scss";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup-container">
      <button onClick={() => props.setTrigger(false)}>
        <img src="/close.svg" />
      </button>
      <div className="popup">
        <div className="content">
          <div className="heading">{props.title}</div>
          <div className="problem-code">Problem Code : {props.name}</div>
          <div className="description">
            <h1>Project Description</h1>
            <div>{props.description}</div>
          </div>
          <div className="outcomes">
            <h1>Expected Outcomes</h1>
            <div>{props.outcome}</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
