import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCategories } from '../../actions/board/board_action';

const Board = props => {

    useEffect(()=>{
        props.getCategories(props.categoriesCount, 0);
    }, [props.round]);

    return (
        <div>
            {JSON.stringify(props.categories)}
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