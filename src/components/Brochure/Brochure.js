import React from "react-dom";
import { useNavigate} from "react-router-dom";
import "./Brochure.scss";

function Brochure() {
  const navigate= useNavigate();

  const navigateToContacts=()=>{
   navigate('/contact');
  }
  const downloadBrochure=()=>{
    fetch('Brochure.pdf').then(response => {
          response.blob().then(blob => {
              const fileURL = window.URL.createObjectURL(blob);
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'brochure.pdf';
              alink.click();
          })
        })
  }
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
        <button id="button1" onClick={navigateToContacts}>Talk to our team</button>
        <button id="button2" onClick={downloadBrochure}>Download Brochure</button>
      </div>
    </div>
  );
}
export default Brochure;
