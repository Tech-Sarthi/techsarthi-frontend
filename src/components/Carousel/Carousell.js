
import React from 'react';

import left_design from "../../media/left_design.png"
import right_design from "../../media/right_design.png"
import logo_175 from "../../media/175.png"
import logo_iitr from "../../media/logo.png"
import './carousell.scss'
import "@fontsource/public-sans";
require('typeface-quantico');

function Carousell() {


    return (

        <div id="box" className="box">
            <span id="text" className="text">
                <div id="logo_frame" className="logo_frame">
                    <div id="box_iitr" classname="box_iitr">
                        <img id="logo_iitr" className='logo_iitr' src={logo_iitr} />
                    </div>
                    <div id="box_175" className='box_175'>
                        <img id="logo_175" classname="logo_175" src={logo_175} />
                    </div>
                </div>
                <div id="institute" className="institute">
                    INDIAN INSTITUTE OF TECHNOLOGY ROORKEE
                </div>
                <div id="name" className="name">
                    TECH SARTHI
                </div>
                <div id="tag-line" className="tag-line">
                    A one stop solution for your technology needs!
                </div>
            </span>
            {/*design pattern*/}
            <img id="left_design" className='left_design' src={left_design}/>
            <img id ="right_design" className='right_design' src={right_design}/>
        </div>
        
        


    );
}


export default Carousell;