import { UPDATE_ROUND } from "../../actions/round/round_action";

const defaultRound = {
    number: 1
};

const roundReducer = (state = defaultRound, action) => {
    Object.freeze(state);

    switch(action.type) {
        case UPDATE_ROUND:
            let nextState = Object.assign({}, state);
            nextState.number = action.round;
            return nextState;
        default:
            return state;
    }
}

export default roundReducer;