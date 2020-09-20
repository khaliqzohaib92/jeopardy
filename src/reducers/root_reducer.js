import { combineReducers } from 'redux';

import boardReducer from './board/board_reducer';
import config from './config/config'
import round from './round/round';

const rootRedcuers =  combineReducers({
    config,
    round,
    board: boardReducer,
});

export default rootRedcuers;