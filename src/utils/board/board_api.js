import { $CombinedState } from "redux"
import { BASE_URL } from "../constants"

export const fetchCategories = (count, offset) => {
    return $.ajax({
        url: `${BASE_URL}/api/categories?count=${count}&offset=${offset}`
    })
}