import React from 'react-dom';
import './Areas.scss';
 

function Areas(){
    return(
        <div id="area_box" className='area_box'>
            <div id= "heading" className='heading'>Specialised Areas</div>
            <div id= "areas" className='areas'>
                Automation<br/>
                Advanced Manufacturing<br/>
                Information Technology<br/>
                Alternate Energy Resources<br/>
                Biotechnologies<br/>
                Chemicals<br/>
                Packaging<br/>
                Pollution Control<br/>
                Waste Management
                
            </div>
        </div>
        );
}
export default Areas;