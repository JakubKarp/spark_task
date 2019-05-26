import getFromMongo from '../data/products-api';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_COLOR = 'SET_COLOR';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const REMOVE_COLOR = 'REMOVE_COLOR';



export function loadProductsFromMongo() {
    return function(dispatch) {
        return getFromMongo.mongoProducts().then(products => {
            dispatch(loadAllDataProducts(products));
        }).catch(error => {
            throw(error);
        });
    };
}


export function loadAllDataProducts(products) {
    console.log("Tu są?", products);
    
    return {
        type: LOAD_PRODUCTS_SUCCESS,
        products
    }
  }


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