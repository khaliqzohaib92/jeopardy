import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCategories } from '../../actions/board/board_action';
import Column from './column/column';
import Clue from '../clue/clue';
import './stylesheet/board.css';
import { getUpdate, updateVal } from '../../utils/helper';
import { receiveUpdateRound } from '../../actions/round/round_action';

const Board = props => {

    const [ddPoint, setddPoint] = useState(null);

    useEffect(()=>{
        let val = getUpdate();
        console.log(val* props.round);
        props.getCategories(props.categoriesCount, val* props.round);

        updateVal(++val);

        setddPoint(()=>{
            let row = Math.floor(Math.random() * (props.cluesCount-1)) + 0
            let column = Math.floor(Math.random() * (props.categoriesCount-1)) + 0;
            console.log([row,column]);
            return [row, column];
        });
        
    }, [props.round]);

    function onCloseClueClick(e){
        props.receiveUpdateRound(1);
    }

    return (
        <div className="board">
          {
              props.round < 3 ?
             ddPoint && <Column 
                key={props.round}
                categories={props.categories} 
                round={props.round}
                clueCount={props.cluesCount}
                DDPoint={ddPoint} /> :
                <Clue 
                onCloseClick={onCloseClueClick}/>
          }  
        </div>
    );
};

Board.propTypes = {
    categoriesCount: PropTypes.number.isRequired,
    cluesCount: PropTypes.number.isRequired,
    round: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired,
};


const mSTP = (state) => {
    return {
        categoriesCount: state.config.categoriesCount,
        cluesCount: state.config.cluesCount,
        round: state.round.number,
        categories: state.board.categories,
    }
}

const mDTP = (dispatch) => {
    return {
        getCategories: (categoriesCount, offset) => dispatch(getCategories(categoriesCount, offset)),
        receiveUpdateRound: (round) => dispatch(receiveUpdateRound(round)),
    }
}


export default connect(mSTP, mDTP)(Board);