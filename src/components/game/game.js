import React, { useState } from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';

import './stylesheet/game.css' 
import { ROUND_TITLE } from '../../utils/constants';
import { connect } from 'react-redux';


const Game = props => {
    const [key, setKey] = useState(0);

    function reset(e){
        setKey((prevKey) => prevKey + 1);
    }

    return (
        <div key={key}>
           <Header title={ROUND_TITLE[props.round]} reset={reset}/> 
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