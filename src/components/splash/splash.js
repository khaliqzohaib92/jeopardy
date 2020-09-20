import React, { PropTypes } from 'react';

import './stylesheet/splash.css';

const Splash = props => {
    return (
        <div className="splash-container">
            <img className="splash-logo" src='/assets/jeopardy_logo.png'/>
        </div>
    );
};

Splash.propTypes = {
    
};

export default Splash;