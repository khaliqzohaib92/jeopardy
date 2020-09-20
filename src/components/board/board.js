import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCategories } from '../../actions/board/board_action';
import Column from './column/column';
import './stylesheet/board.css';

const Board = props => {

    useEffect(()=>{
        props.getCategories(props.categoriesCount, 0);
    }, [props.round]);

    return (
        <div className="board">
            <Column 
            categories={props.categories} 
            round={props.round}
            clueCount={props.cluesCount} />
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