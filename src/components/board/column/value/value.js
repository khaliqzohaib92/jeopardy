import React from 'react';
import PropTypes from 'prop-types';

const Value = props => {
    return (
        <div>
        {props.value}
        </div>
    );
};

Value.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Value;