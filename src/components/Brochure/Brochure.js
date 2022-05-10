import React from 'react-dom';
import { Link } from "react-router-dom";
import pdf from "../../media/Pdfs/brochure.pdf";
import download_icon from "../../media/download.png";
import './Brochure.scss'
require('typeface-heebo');

function Brochure() {
    return (
        <div id="brochure_box" className='brochure_box'>
            <div id="brochure_heading" className='brochure_heading'> BROCHURE</div>
            <div id="download_box" className='download_box'>
                <Link to={pdf} target="_blank" download className='download_frame' style={{ textDecoration: 'none' }}>
                    <div id="download_text" className="download_text">DOWNLOAD HERE</div>
                    <img id="download_icon" className="download_icon" src={download_icon} />

                </Link>
            </div>

        </div>
    );
}
export default Brochure;