import React, { PropTypes } from 'react';

const Clue = props => {
    return (
        <div>
           {JSON.stringify(props)}
        </div>
    );
};

// Clue.propTypes = {
//     categoryId: PropTypes.number,
//     value: PropTypes.number,
// };

export default Clue;