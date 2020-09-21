import React from 'react';
import PropTypes from 'prop-types';

import Category from './category/category';
import Value from './value/value';
import './stylesheet/column.css';
import { VALUES } from '../../../utils/constants';

const Column = (props) => {

    function getValueViews(clueCount) {
        let views = [];

        for(let row = 0; row < clueCount; row++){
            views.push(
                <li key={row} className="column-value">
                    <Value key={row} value={(VALUES[row]) * props.round}/>
                </li>
            )
        }

        return views;
    }

    return (
        <ul className="column-container">
            {
                props.categories.map((category, column) => {
                    return (
                        <li key={column} className="column">
                            <Category key={category.id} category={category}/>
                            <ul className="column-values" key={column}>
                            {
                                getValueViews(props.clueCount)
                            }
                            </ul>
                        </li>
                    )
                })   
            }
        </ul>
    );
};

Column.propTypes = {
    categories: PropTypes.array.isRequired,
    round: PropTypes.number.isRequired,
    clueCount: PropTypes.number.isRequired,
};

export default Column;