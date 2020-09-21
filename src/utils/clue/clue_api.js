import axios from "axios"
import { BASE_URL } from "../constants"

export const fetchClue  = (categoryId, value) => {
    return axios({
        url: `${BASE_URL}/api/${categoryId ? `clues?value=${value}&category=${categoryId}`: `random?count=1`}`
    });
}