import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './stylesheet/clue.css';
import { getClue, receiveClue } from '../../actions/clue/clue_action'
import { connect } from 'react-redux';

const Clue = props => {

    const [toggleQA, setToggleQA] = useState(false);

    useEffect(()=>{
        props.getClue(props.categoryId, props.value);
    }, [props.categoryId, props.value]);


    function onCheckChange(e) {
        setToggleQA(!toggleQA);
    }

    return (
        !props.clue ? null : <div className="clue-container">
           <div className="clue">
               <div className="clue-header">
                    <h3 className="clue-title">
                        {props.isDDPoint ? "Daily Double |": ""} 
                        {!toggleQA ? " Question" : " Answer"}
                    </h3>
                    <label className="switch clue-switch">
                        <input type="checkbox" onClick={onCheckChange}/>
                        <span className="slider round"></span>
                    </label>
               </div>
               <p className="clue-aq">{!toggleQA ? props.clue.question : props.clue.answer}</p>
               <button className="button clue-done" onClick={() => {
                   props.receiveClue({});
                   props.onCloseClick();
               }}>Done</button>
           </div>
        </div>
    );
};

Clue.propTypes = {
    categoryId: PropTypes.number,
    value: PropTypes.number,
    isDDPoint: PropTypes.bool,
    onCloseClick: PropTypes.func.isRequired,
    getClue: PropTypes.func.isRequired,
    clue: PropTypes.object,
};

const mSTP = (state) => {
    return {
        clue: state.board.clue,
    }
}

const mDTP = (dispatch) => {
    return {
        getClue: (categoryId, value) => dispatch(getClue(categoryId, value)),
        receiveClue: (clue) => dispatch(receiveClue(clue)),
    }
}

export default connect(mSTP, mDTP)(Clue);