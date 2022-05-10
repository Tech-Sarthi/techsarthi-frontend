import React from "react";
import './about.scss';


function About() {
    return (
        <div id="about_container" className="about_container">
            <div id="about_bg" className="about_bg" />
            <ul className="about_heading" id="about_heading">
                <li className="heading_1">About</li>
                <li className="heading_2">Tech Sarthi</li>
                <li className="heading_3">Initiative</li>
            </ul>
            <div id="about_line" className="about_line" />
            <div id="about_text" className="about_text">
                TechSarthi is an IIT Roorkee’s endeavour for supporting Industrial Units in and around Roorkee. TechSarthi will focus on industries in 175 km radius of IIT Roorkee to help them adopt technically sound solutions, gear up their growth and realize the objectives of going “Local to Global”. This scheme will spot opportunities for new products, services, markets, including assessing technology portfolio and intellectual property rights. The objective of this initiative is to make Roorkee region a highly efficient and effective industrial hub promoting investments and reducing migrations.
            </div>

        </div>
    );
}

export default About;