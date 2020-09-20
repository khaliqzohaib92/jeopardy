import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';

import './stylesheet/game.css' 


const Game = props => {
    const [key, setKey] = useState(0)
    function reset(e){
        setKey((prevKey) => prevKey + 1);
    }
    return (
        <div key={key}>
           <Header title={"Jeopardy"} reset={reset}/> 
        </div>
    );
};

Game.propTypes = {
    
};

export default Game;