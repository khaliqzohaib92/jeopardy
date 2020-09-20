import React from 'react';
import { HashRouter } from 'react-router-dom';

import configureStore from '../../../store/store';
import { Provider } from 'react-redux';
import App from '../app/App';

const store = configureStore();

const Root = props => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    );
};


export default Root;