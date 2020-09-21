import { fetchClue } from "../../utils/clue/clue_api";

export const RECEIVE_CLUE = "RECEIVE_CLUE";

export const receiveClue = (clue) => {
    return {
        type: RECEIVE_CLUE,
        clue,
    }
}

export const getClue = (categoryId, value) => dispatch => {
    return fetchClue(categoryId, value)
    .then(res => receiveClue(res.data));
}