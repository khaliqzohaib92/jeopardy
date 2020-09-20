import React from 'react';
import PropTypes from 'prop-types';

import Category from './category/category';
import Value from './value/value';
import './stylesheet/column.css';
import { VALUES } from '../../../utils/constants';

const Column = (props) => {

    function getValueViews(clueCount) {
        let views = [];

        for(let i = 0; i < clueCount; i++){
            views.push(
                <li key={i}>
                    <Value key={i} value={(VALUES[i]) * props.round}/>
                </li>
            )
        }

        return views;
    }

    return (
        <ul className="column-container">
            {
                props.categories.map((category, idx) => {
                    return (
                        <li key={idx} className="column">
                            <Category key={category.id} category={category}/>
                            <ul className="column-values" key={idx}>
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