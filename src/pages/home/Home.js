import React, { useContext } from "react";

import Carousell from "../../components/Carousel/Carousell";
import About from "../../components/About/About";
import Brochure from "../../components/Brochure/Brochure";
import Process from "../../components/Process_flow/Process";
import Areas from "../../components/Areas/Areas";
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
      <Areas />
    </div>
  );
}

export default Home;
