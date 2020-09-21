import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './stylesheet/clue.css';
import { getClue } from '../../actions/clue/clue_action'
import { connect } from 'react-redux';

const Clue = props => {

    useEffect(()=>{
        props.getClue(props.categoryId, props.value);
    }, [props.categoryId, props.value]);


    return (
        <div className="clue-container">
           <div className="clue">
               <div>
                    <h3>
                        {props.isDDPoint ? "Daily Double |": ""} 
                        Question
                    </h3>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
               </div>
           </div>
        </div>
    );
};

Clue.propTypes = {
    categoryId: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    isDDPoint: PropTypes.bool.isRequired,
    onCloseClick: PropTypes.func.isRequired,
    getClue: PropTypes.func.isRequired,
    clue: PropTypes.object.isRequired,
};

const mSTP = (state) => {
    return {
        clue: state.board.clue,
    }
}

const mDTP = (dispatch) => {
    return {
        getClue: (categoryId, value) => dispatch(getClue(categoryId, value)),
    }
}

export default connect(mSTP, mDTP)(Clue);