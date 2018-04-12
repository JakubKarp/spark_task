import { GET_PRODUCTS, SET_CATEGORY, SET_COLOR, SET_COLORCATEGORY } from '../actions/actions-products';
import {productsData} from '../data/products.js';

const initialState = {
    products: productsData,
    visibleProducts: []
};

const productsReducer =  function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, state, {visibleProducts: state.products});
        case SET_CATEGORY:
            const categoryProducts = state.products.filter(product => product.category === action.category);
            return Object.assign({}, state, {visibleProducts: categoryProducts});            
        case SET_COLOR:
            const colorProducts = state.products.filter(product => product.color === action.color);
            return Object.assign({}, state, {visibleProducts: colorProducts});
    }
    return state;    
};

export default productsReducer;