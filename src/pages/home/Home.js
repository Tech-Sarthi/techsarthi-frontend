import React from "react";

import Carousell from "../../components/Carousel/Carousell";
import About from "../../components/About/About";
import Brochure from "../../components/Brochure/Brochure";
import Process from "../../components/Process_flow/Process";
import Areas from "../../components/Areas/Areas";




function Home(){
    return (
        <>
        <Carousell/>
        <About/>
        <Brochure/>
        <Process/>
        <Areas/>
        </>
    );
}

export default Home;