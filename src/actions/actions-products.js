export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_COLOR = 'SET_COLOR';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export function getProducts() {
    return {
        type: GET_PRODUCTS
    }
}

export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    }
}

export function setColor(color) {
    return {
        type: SET_COLOR,
        color
    }
}

export function removeFilter(filter) {
    return {
        type: REMOVE_FILTER,
        filter
    }
}
