import axios from "axios"
import { BASE_URL } from "../constants"

export const fetchClue  = (categoryId, value) => {
    return axios({
        url: `${BASE_URL}/api/clues?value=${value}&category=${categoryId}`
    });
}