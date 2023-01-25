import React from "react";

import "./carousell.scss";
import "@fontsource/public-sans";
require("typeface-quantico");

function Carousell(props) {
  return (
    <div id="box" className="carousel" >
      <div id="carouselIndicators" class="carousel slide" data-ride="carousel" data-interval="700">
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="/banner.svg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo1.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo10.jpg" alt="ninth slide" />
          </div>   
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo5.jpg" alt="third slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo11.jpg" alt="ninth slide" />
          </div>   
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo12.jpg" alt="ninth slide" />
          </div>   
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo4.jpg" alt="Fourth slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo2.jpg" alt="Fifth slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo7.jpg" alt="Seventh slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo8.jpg" alt="Eighth slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/photo9.jpg" alt="ninth slide" />
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
        <h2 id="problem">Stuck with a problem?</h2>
        <h3 id="solution">
          TechSarthi comes to the rescue. One stop solution for all your
          technology needs!
        </h3>
      </div>
    </div>
  );
}

export default Carousell;
