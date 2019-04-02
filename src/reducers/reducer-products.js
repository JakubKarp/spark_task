import { GET_PRODUCTS, SET_CATEGORY, SET_COLOR, REMOVE_FILTER } from '../actions/actions-products';
import {productsData} from '../data/products.js';

const initialState = {
    products: productsData,
    visibleProducts: [],
    selectedCategory: null,
    selectedColor: null,
    filter: null
};

const productsReducer =  function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, visibleProducts: state.products};
        case SET_CATEGORY:
            state.selectedCategory = state.products.filter(product => product.category === action.category);
            state.filter = 'Kategorii'
            return  {...state, visibleProducts: state.selectedCategory};            
        case SET_COLOR:
            state.selectedColor = state.selectedCategory !== null  ? state.selectedCategory.filter(product => product.color === action.color) : state.products.filter(product => product.color === action.color);
            state.filter = 'Koloru'
            return  {...state, visibleProducts: state.selectedColor};
        case REMOVE_FILTER:
            (state.selectedColor !== null || state.selectedCategory !== null) ?  (state.selectedCategory = null) && (state.selectedColor = null)  : null;
            return  {...state, visibleProducts: state.products};    
    }
    return state;    
};

export default productsReducer;