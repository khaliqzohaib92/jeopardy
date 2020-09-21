import React from 'react';

import './stylesheet/confirmation.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Confirmation = props => {

    return (
        <div className="confirmation-container">
           <div className="confirmation">
               <div className="confirmation-header">
                    <h3 className="confirmation-title">
                        Confirmation
                    </h3>
                    <AiOutlineCloseCircle className="confirmation-close"  onClick={props.onCloseClick}/>
               </div>
               <p className="confirmation-message">Are you sure you want to reset the game?</p>
               <button className="button confirmation-done" onClick={props.onYesClick}>Yes</button>
           </div>
        </div>
    );
};


export default Confirmation;