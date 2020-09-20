import { RECEIVE_CATEGORIES } from "../../actions/board/board_action";

const { combineReducers } = require("redux")

const defaultBoard = combineReducers({
    categories: {},
    clues: {}
});

const boardReducer = (state = defaultBoard, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CATEGORIES:
            const nextState = Object.assign({}, state);
            nextState.categories = action.categories;
            return nextState;
        default:
            return state;
    }
}

export default boardReducer;