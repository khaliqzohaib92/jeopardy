import { combineReducers } from 'redux';

import boardReducer from './board/board_reducer';
import config from './config/config'

const rootRedcuers =  combineReducers({
    config,
    board: boardReducer,
});

export default rootRedcuers;