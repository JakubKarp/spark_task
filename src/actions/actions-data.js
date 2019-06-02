import getFromMongo from '../data/products-api';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_ADMIN = 'LOAD_PRODUCTS_ADMIN'

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
    return {
        type: LOAD_PRODUCTS_SUCCESS,
        products
    }
}

export function loadDataForAdmin() {
    return function(dispatch) {
        return getFromMongo.mongoProducts().then(products => {
            dispatch(loadProductsForAdmin(products));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadProductsForAdmin(products) {
    return {
        type: LOAD_PRODUCTS_ADMIN,
        products
    }
}