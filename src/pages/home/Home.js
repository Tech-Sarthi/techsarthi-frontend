import React from "react";
import "./home.scss";
import top from "../../media/top.png"
import iitrLogo from "../../media/iitr-logo.png"
function Home() {
  return (
    <div className="App">
      <img
          className="top_img"
          alt="no image"
          src={top}
        />
        {/* <img src={iitrLogo} alt="iitr logo" className="iitrLogo"/>
        <p className="iitr">INDIAN INSTITUTE OF TECHNOLOGY ROORKEE</p> */}
    </div>
  );
}

export default Home;
