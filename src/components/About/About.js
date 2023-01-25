import React from "react";
import "./about.scss";

function About() {
  return (
    <div id="about_container" className="about_container">
      {/* <div className="logo">
        <img src="/iitr_logo.svg" />
      </div> */}
      <div className="about_heading" id="about_heading">
        <div className="heading_box">
          <div className="heading_1">About</div>
          <div className="heading_2">Tech Sarthi</div>
          <div className="heading_3">Initiative</div>
        </div>
      </div>
      <div className="about_text_container">
        <div id="about_text" className="about_text">
          TechSarthi is an IIT Roorkee’s endeavour for supporting Industrial
          Units in and around Roorkee. TechSarthi will focus on industries in
          175 km radius of IIT Roorkee to help them adopt technically sound
          solutions, gear up their growth and realize the objectives of going
          “Local to Global”. This scheme will spot opportunities for new
          products, services, markets, including assessing technology portfolio
          and intellectual property rights. The objective of this initiative is
          to make Roorkee region a highly efficient and effective industrial hub
          promoting investments and reducing migrations.
        </div>
      </div>
    </div>
  );
}

export default About;
