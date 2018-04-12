export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_COLOR = 'SET_COLOR';


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