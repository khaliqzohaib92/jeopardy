import React from 'react';
import PropTypes from 'prop-types';

import './stylesheet/value.css'

const Value = props => {
    return (
        <span className="value">
            ${props.value}
        </span>
    );
};

Value.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Value;