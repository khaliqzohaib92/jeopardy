import React from 'react';
import PropTypes from 'prop-types';

import './stylesheet/category.css';

const Category = props => {
    return (
        <div className="category">
            {props.category.title}
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object,
};

export default Category;