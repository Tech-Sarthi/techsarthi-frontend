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
      <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="/banner.svg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo1.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo2.jpg" alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="text">
        <h2 id="solution">A one stop solution for all your technology needs</h2>
        <h3 id="problem">
          Stuck with problem ? Need a quality solution blah blah blah......
        </h3>
      </div>
    </div>
  );
}

export default Carousell;
