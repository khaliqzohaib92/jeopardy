import React, { useState } from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './stylesheet/game.css' 
import { ROUND_TITLE } from '../../utils/constants';
import Board from '../board/board';

const Game = props => {
    const [key, setKey] = useState(0);

    function reset(e){
        setKey((prevKey) => prevKey + 1);
    }

    return (
        <div className="game" key={key}>
           <Header title={ROUND_TITLE[props.round]} reset={reset}/> 
           <Board />
        </div>
    );
};

Game.propTypes = {
    round: PropTypes.number.isRequired,
}

const mSTP = (state) => {
    return {
        round: state.round,
    }
}

export default connect(mSTP)(Game);