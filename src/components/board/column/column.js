import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Category from './category/category';
import Value from './value/value';
import Clue from '../../clue/clue';
import './stylesheet/column.css';
import { VALUES } from '../../../utils/constants';
import { receiveUpdateRound } from '../../../actions/round/round_action';
import { connect } from 'react-redux';

const Column = (props) => {

    const [viewedClues, setViewedClues] = useState({});
    const [showClue, setShowClue] = useState(false);
    const [categoryId, setCategoryId] = useState(null);
    const [clueValue, setClueValue] = useState(null);
    const [isDDPoint, setIsDDPoint] = useState(false);

    function openClue(categoryId, clueValue, point) {
        return e => {
            setShowClue(true);
            setCategoryId(categoryId);
            setClueValue(clueValue);
            setIsDDPoint(point[0] === props.DDPoint[0] && point[1] === props.DDPoint[1]);

            setViewedClues(prevViewedClues => {
                prevViewedClues[`${point[0]},${point[1]}`] = true;
                return prevViewedClues;
            });
        }
    }

    function isClueViewed (point) {
        return point in viewedClues;
    }

    function getValueViews(clueCount, column) {
        let views = [];
        const categoryId = props.categories[column].id;
        for(let row = 0; row < clueCount; row++){
            const clueValue = (VALUES[row]);
            const point = [row, column];
            views.push(
                <li 
                key={row} 
                className={`column-value ${isClueViewed(point) ? "column-value-disabled" : "column-value-enabled"}`} 
                onClick={!isClueViewed(point) ? openClue(categoryId, clueValue, point) : ()=>{}}
                >
                    <Value 
                    key={row} 
                    value={clueValue * props.round}
                    />
                </li>
            )
        }

        return views;
    }

    function onCloseClueClick(e) {
        setShowClue(false);

        const totalCell = props.categories.length * props.clueCount;
        if(totalCell === Object.keys(viewedClues).length){
            props.receiveUpdateRound(props.round + 1);
        }
    }

    return (
        <>
            <ul className="column-container">
                {
                    props.categories.map((category, column) => {
                        return (
                            <li key={column} className="column">
                                <Category key={category.id} category={category}/>
                                <ul className="column-values" key={column}>
                                {
                                    getValueViews(props.clueCount, column)
                                }
                                </ul>
                            </li>
                        )
                    })   
                }
            </ul>
            {
                (showClue && categoryId && clueValue) && 
                <Clue 
                categoryId={categoryId} 
                value={clueValue} 
                isDDPoint={isDDPoint}
                onCloseClick={onCloseClueClick}/>
            }
        </>
    );
};

Column.propTypes = {
    categories: PropTypes.array.isRequired,
    round: PropTypes.number.isRequired,
    clueCount: PropTypes.number.isRequired,
    DDPoint: PropTypes.array.isRequired,
    receiveUpdateRound: PropTypes.func.isRequired,
};

const mDTP = dispatch => {
    return {
        receiveUpdateRound: (round) => dispatch(receiveUpdateRound(round)),
    }
}

export default connect(null, mDTP)(Column);