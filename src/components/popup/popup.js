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
          <div className="heading">
            Development of Glow plugs for Diesel Engine
          </div>
          <div className="problem-code">Problem Code : {"TS01"}</div>
          <div className="description">
            <h1>Project Description</h1>
            <div>
              The manufacturer is manufacturing glow plugs using local
              techniques and exporting it to Europe. With the emerging
              technology manufacturer is facing issues in exporting the under
              quality product at Europeon countries.
            </div>
          </div>
          <div className="outcomes">
            <h1>Expected Outcomes</h1>
            <div>
              Manufacturer wants our expertise in designing a cermaic based glow
              plug at par with europeon standards or some other material based
              better option is also acceptable provided that is cost efficient.
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
