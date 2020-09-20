import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveCategoriesCluesCount } from '../../actions/splash/splash_action';

import './stylesheet/splash.css';
import { ROUTE_GAME } from '../../utils/routes';

const Splash = props => {
    const [categoriesCount, setCategoriesCount] = useState(props.categoriesCount);
    const [cluesCount, setCluesCount] = useState(props.cluesCount);

    function onChangeCount(type) {
        return e => {
            switch(type){
                case 'categories':
                    setCategoriesCount(parseInt(e.target.value));
                    break;
                case 'clues':
                    setCluesCount(parseInt(e.target.value));
                    break;
            }
        }
    }

    function onClickLetsBegin(e) {
        // update state
        props.receiveCategoriesCluesCount(categoriesCount, cluesCount);

        // redirect to game component
        props.history.push(ROUTE_GAME);

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
                    max={5}
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

const mSTP = (state) => {
    return {
        categoriesCount: state.config.categoriesCount,
        cluesCount: state.config.cluesCount,
    }
}

const mDTP = (dispatch) => {
    return {
        receiveCategoriesCluesCount: (categoriesCount, cluesCount) => 
        dispatch(receiveCategoriesCluesCount(categoriesCount, cluesCount))
    }
}

export default withRouter(connect(mSTP, mDTP)(Splash));