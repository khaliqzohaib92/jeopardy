import { fetchCategories } from '../../utils/board/board_api';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const receiveCategories = (categories) => {
    return {
        categories
    };
}

export const getCategories = (count, offset) => dispatch => {
    return fetchCategories(count, offset)
    .then(categories => dispatch(receiveCategories(categories)))
}