import React from "react";

import Carousell from "../../components/Carousel/Carousell";
import About from "../../components/About/About";
import Brochure from "../../components/Brochure/Brochure";
import Process from "../../components/Process_flow/Process";
import Areas from "../../components/Areas/Areas";

function Home() {
  return (
    <>
      <Carousell
        header="INDIAN INSTITUTE OF TECHNOLOGY ROORKEE"
        name="TECH SARTHI"
        details="A one stop solution for your technology needs!"
        height="545px"
      />
      <About />
      <Brochure />
      <Process />
      <Areas />
    </>
  );
}

export default Home;
