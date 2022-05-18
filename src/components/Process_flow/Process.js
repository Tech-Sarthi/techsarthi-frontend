import React from 'react-dom';
import './Process.scss'
import process_bar from '../../media/Group 9.png'

function Process(){
    return(
        <div id="process_box" className='process_box'>
            <div id="assessment" className= 'assessment'>ASSESSMENT</div>
            <div id="assessment_text" className= 'assessment_text'>Collection of information related to organisation including, technical capablities, innovative practices and products followed by assessment of situation</div>
            
            <div id="solution" className= 'solution'>SOLUTION</div>
            <div id="solution_text" className= 'solution_text'>Proposal and delivery of final solution</div>

            <div id="visit" className= 'visit'>VISIT</div>
            <div id="visit_text" className= 'visit_text'>Visit to industries within 175kms of IIT Roorkee Tech Sarthi Team</div>
            
            <div id="analysis" className= 'analysis'>ANALYSIS</div>
            <div id="analysis_text" className= 'analysis_text'>Analysis of data and in depth deliberation over issues and possible solutions</div>

            <img id="process_bar" className= 'process_bar' src={process_bar} alt= 'Process logo' />
        </div>

        );
}
export default Process;