export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_COLOR = 'SET_COLOR';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const REMOVE_COLOR = 'REMOVE_COLOR';
// export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
// export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
// export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// export function fetchProducts() {
//     return axios.get('http://localhost:4000/products')
//         .then(response => {
//             console.log("TCL: fetchProducts -> response from axios", response.data)
//             fetchProductsSuccess(response.data);
//             return response.data;
//         })
//         .catch(error => {
//             fetchProductsFailure(error)
//             console.log(error);
//         })
// }

// export const fetchProductsBegin = () => ({
//     type: FETCH_PRODUCTS_BEGIN
// });

// export const fetchProductsSuccess = products => ({
//     type: FETCH_PRODUCTS_SUCCESS,
//     payload: {
//         products
//     }
// });

// export const fetchProductsFailure = error => ({
//     type: FETCH_PRODUCTS_FAILURE,
//     payload: {
//         error
//     }
// });

export function getProducts() {
    return {
        type: GET_PRODUCTS
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
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

export function removeCategory() {
    return {
        type: REMOVE_CATEGORY,
    }
}

export function removeColor(color) {
    return {
        type: REMOVE_COLOR,
        color
    }
}