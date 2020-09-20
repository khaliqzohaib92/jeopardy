const { combineReducers } = require("redux")

const defaultBoard = combineReducers({
    categories: {},
    clues: {}
});

const boardReducer = (state = defaultBoard, action) => {
    Object.freeze(state);

    switch(action.type){
        default:
            return state;
    }
}

export default boardReducer;