import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCategories } from '../../actions/board/board_action';
import Column from './column/column';
import './stylesheet/board.css';

const Board = props => {

    const [ddPoint, setddPoint] = useState(null);

    useEffect(()=>{
        props.getCategories(props.categoriesCount, 0);
        setddPoint(()=>{
            let row = Math.floor(Math.random() * (props.cluesCount-1)) + 1
            let column = Math.floor(Math.random() * (props.categoriesCount-1)) + 1;
            console.log([row,column]);
            return [row, column];
        })
    }, [props.round]);

    return (
        <div className="board">
          {
             ddPoint && <Column 
                categories={props.categories} 
                round={props.round}
                clueCount={props.cluesCount}
                DDPoint={ddPoint} />
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
        round: state.round,
        categories: state.board.categories,
    }
}

const mDTP = (dispatch) => {
    return {
        getCategories: (categoriesCount, offset) => dispatch(getCategories(categoriesCount, offset)),
    }
}


export default connect(mSTP, mDTP)(Board);