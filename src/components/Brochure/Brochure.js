import React from "react-dom";
import "./Brochure.scss";

function Brochure() {
  return (
    <div id="brochure_box" className="brochure_box">
      <div className="key-points">
        <div className="item">
          <img src="bulb.svg" />
          <div> Innovative Solutions</div>
        </div>
        <div className="item">
          <img src="meter.svg" />
          <div> Improve Efficiency</div>
        </div>
        <div className="item">
          <img src="badge.svg" />
          <div> National Recognition</div>
        </div>
      </div>
      <div className="one-liner">
        Want to get started with us? Register your problem now!
      </div>
      <div className="button-box">
        <button id="button1">Talk to our team</button>
        <button id="button2">Download Brochure</button>
      </div>
    </div>
  );
}
export default Brochure;
