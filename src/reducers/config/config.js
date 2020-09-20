const { RECEIVE_CATEGORIES_CLUES_COUNT } = require("../../actions/splash/splash_action");
const { CATEGORIES_COUNT, CLUES_COUNT } = require("../../utils/defaults");

const defaultConfig = {
    categoriesCount: CATEGORIES_COUNT,
    cluesCount: CLUES_COUNT 
}

const config = (state = defaultConfig, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CATEGORIES_CLUES_COUNT:

            const nextState = Object.assign({}, state);

            nextState.categoriesCount = action.categoriesCount;
            nextState.cluesCount = action.cluesCount;

            return nextState;
        default:
            return state;
    }

}

export default config;