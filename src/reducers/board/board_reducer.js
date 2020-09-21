import { RECEIVE_CATEGORIES } from "../../actions/board/board_action";
import { RECEIVE_CLUE } from "../../actions/clue/clue_action";

const defaultBoard = {
    categories: [],
    clue: {},
};

const boardReducer = (state = defaultBoard, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CATEGORIES:
            let nextState = Object.assign({}, state);
            nextState.categories = action.categories;
            return nextState;
        case RECEIVE_CLUE:
            nextState = Object.assign({}, state);
            nextState.clue = action.clue;
            return nextState;
        default:
            return state;
    }
}

export default boardReducer;