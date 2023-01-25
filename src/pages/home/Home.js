import React, { useContext } from "react";

import Carousell from "../../components/Carousel/Carousell";
import About from "../../components/About/About";
import Brochure from "../../components/Brochure/Brochure";
import Process from "../../components/Process_flow/Process";
import ServiceAreas from "../../components/ServiceAreas/ServiceAreas.js";
import AreasCovered from "../../components/AreasCovered/AreasCovered";
import { ThemeContext } from "../../App.js";
function Home() {
  const { value1, value2 } = useContext(ThemeContext);
  const [page, setPage] = value2;
  setPage(0);
  console.log(value1);
  return (
    <div className="home-container">
      <Carousell />
      <About />
      <Process />
      <Brochure />
      <ServiceAreas />
      <AreasCovered />
    </div>
  );
}

export default Home;
