import { fetchCategories } from '../../utils/board/board_api';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const receiveCategories = (categories) => {
    return {
        categories
    };
}

const fetchCategories = (count, offset) => dispatch => {
    return fetchCategories(count, offset)
    .then(categories => dispatch(receiveCategories(categories)))
}