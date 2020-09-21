import React from 'react';
import PropTypes from 'prop-types';

import './stylesheet/category.css';

const Category = props => {
    return (
        <span className="category">
            {props.category.title}
        </span>
    );
};

Category.propTypes = {
    category: PropTypes.object,
};

export default Category;