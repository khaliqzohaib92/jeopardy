export const RECEIVE_CATEGORIES_CLUES_COUNT = "RECEIVE_CATEGORIES_CLUES_COUNT";

export const receiveCategoriesCluesCount = (categoriesCount, cluesCount) => {
    return {
        type: RECEIVE_CATEGORIES_CLUES_COUNT,
        categoriesCount,
        cluesCount
    }
};