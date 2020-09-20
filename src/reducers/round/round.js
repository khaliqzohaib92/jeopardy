import { UPDATE_ROUND } from "../../actions/round/round";

const defaultRound = 1;

const roundReducer = (state = defaultRound, action) => {
    switch(action.type) {
        case UPDATE_ROUND:
            return action.round;
        default:
            return defaultRound;
    }
}

export default roundReducer;