import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Board = props => {
    return (
        <div>
            
        </div>
    );
};

Board.propTypes = {
    categoriesCount: PropTypes.number.isRequired,
    cluesCount: PropTypes.number.isRequired,
};

const mSTP = (state) => {
    return {
        categoriesCount: state.categoriesCount,
        cluesCount: state.cluesCount,
    }
}

export default connect(mSTP)(Board);