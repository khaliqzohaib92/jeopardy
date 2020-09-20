import React from 'react';
import PropTypes from 'prop-types';

import './stylesheet/header.css'
import { VscDebugRestart } from 'react-icons/vsc'

const Header = props => {
    return (
        <header className="header">
            <h1 className="header-title">{props.title}</h1>
            <VscDebugRestart  className="header-restart-icon" onClick={props.reset}/>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    reset: PropTypes.func.isRequired,
};

export default Header;