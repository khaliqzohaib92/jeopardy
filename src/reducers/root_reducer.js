import { combineReducers } from 'redux';
import boardReducer from './board/board_reducer';


const rootRedcuers =  combineReducers({
    boardReducer
});

export default rootRedcuers;