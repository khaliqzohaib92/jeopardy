import axios from "axios"
import { BASE_URL } from "../constants"

export const fetchCategories = (count, offset) => {
    return axios({
        url: `${BASE_URL}/api/categories?count=${count}&offset=${offset}`
    })
}