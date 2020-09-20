import React, { PropTypes, useState } from 'react';
import { withRouter } from 'react-router-dom';

import './stylesheet/splash.css';

const Splash = props => {
    const [categoriesCount, setCategoriesCount] = useState(6);
    const [cluesCount, setCluesCount] = useState(5);

    function onChangeCount(type) {
        return e => {
            switch(type){
                case 'categories':
                    setCategoriesCount(e.target.value);
                    break;
                case 'clues':
                    setCluesCount(e.target.value);
                    break;
            }
        }
    }

    function onClickLetsBegin(e) {
        
    }

    return (
        <div className="splash-container">
            <img className="splash-logo" src='/assets/jeopardy_logo.png'/>
            <div className="splash-category-clue-number-selector">
                <div className="splash-categories">
                    <span className="splash-categories-label">Categories: </span>
                    <input 
                    className="splash-number-input" 
                    type="number" 
                    value={categoriesCount} 
                    max={100}
                    onChange={onChangeCount("categories")}/>
                </div>
                <div className="splash-clues">
                    <span className="splash-clues-label">Clues: </span>
                    <input 
                    className="splash-number-input" 
                    type="number" 
                    value={cluesCount} 
                    max={50}
                    onChange={onChangeCount("clues")}/>
                </div>
            </div>
            <button 
            className="splash-begin-button button"
            onClick={onClickLetsBegin}
            >Lets Begin!</button>
        </div>
    );
};

Splash.propTypes = {
    
};

export default withRouter(Splash);