export const UPDATE_ROUND = "UPDATE_ROUND";

export const receiveUpdateRound = (round) => {
    return {
        type: UPDATE_ROUND,
        round,
    }
}