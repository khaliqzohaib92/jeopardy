import { RECEIVE_CATEGORIES } from "../../actions/board/board_action";
import { RECEIVE_CLUE } from "../../actions/clue/clue_action";

const defaultBoard = {
    categories: [],
    clue: {},
};

const boardReducer = (state = defaultBoard, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_CATEGORIES:
            nextState.categories = action.categories;
            return nextState;
        case RECEIVE_CLUE:
            nextState.clue = action.clue[0];
            return nextState;
        default:
            return state;
    }
}

export default boardReducer;