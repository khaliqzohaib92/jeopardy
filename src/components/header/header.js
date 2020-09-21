import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './stylesheet/header.css'
import { VscDebugRestart } from 'react-icons/vsc'
import { BiHomeAlt } from 'react-icons/bi'
import { withRouter } from 'react-router-dom';
import { ROUTE_SPLASH } from '../../utils/routes';
import Confirmation from '../confirmation/confirmation';

const Header = props => {
    const [showConfirmation, setShowConfrimation] = useState(false);
    return (
        <>
            <header className="header">
                <BiHomeAlt  className="header-restart-icon home" onClick={() => props.history.push(ROUTE_SPLASH)}/>
                <h1 className="header-title">{props.title}</h1>
                <VscDebugRestart  className="header-restart-icon" onClick={()=>setShowConfrimation(true)}/>
            </header>
            {
            showConfirmation && <Confirmation onYesClick={props.reset} onCloseClick={() => setShowConfrimation(false)}/>
            }
        </>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    reset: PropTypes.func.isRequired,
};

export default withRouter(Header);