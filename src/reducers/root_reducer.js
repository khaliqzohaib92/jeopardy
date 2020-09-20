import { combineReducers } from 'redux';

import boardReducer from './board/board_reducer';
import config from './config/config_reducer'
import round from './round/round_reducer';

const rootRedcuers =  combineReducers({
    config,
    round,
    board: boardReducer,
});

export default rootRedcuers;