import React from "react";

import left_design from "../../media/left_design.png";
import right_design from "../../media/right_design.png";
import logo_175 from "../../media/175.png";
import logo_iitr from "../../media/logo.png";
import "./carousell.scss";
import "@fontsource/public-sans";
require("typeface-quantico");

function Carousell(props) {
  return (
    <div id="box" className="carousel">
      <div className="banner">
        <img src="/banner.svg" />
      </div>
      <h2>A one stop solution for all your technology needs</h2>
      <h3>Stuck with problem ? Need a quality solution blah blah blah......</h3>
    </div>
  );
}

export default Carousell;
