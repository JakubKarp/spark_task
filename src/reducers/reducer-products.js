import { GET_PRODUCTS, SET_CATEGORY, SET_COLOR, REMOVE_CATEGORY, REMOVE_COLOR } from '../actions/actions-products';
import {productsData} from '../data/products.js';

const initialState = {
    products: productsData,
    visibleProducts: [],
    selectedCategory: null,
    selectedColor: null
    
};

const productsReducer =  function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, visibleProducts: state.products};
        case SET_CATEGORY:
            //state.selectedCategory = state.products.filter(product => product.category === action.category);
            state.selectedCategory = state.selectedColor !== null  ? state.selectedColor.filter(product => product.category === action.category) : state.products.filter(product => product.category === action.category);
			console.log("TCL: productsReducer -> state.selectedCategory", state.selectedCategory)
            return  {...state, visibleProducts: state.selectedCategory};            
        case SET_COLOR:
            state.selectedColor = state.selectedCategory !== null  ? state.selectedCategory.filter(product => product.color === action.color) : state.products.filter(product => product.color === action.color);
            return  {...state, visibleProducts: state.selectedColor};
        case REMOVE_CATEGORY:
            state.selectedCategory !== null ?  state.selectedCategory = null : state;
            return  {...state, visibleProducts: state.products};
        case REMOVE_COLOR:
            state.selectedColor !== null ?  state.selectedColor = null : state;
            return  {...state, visibleProducts: state.products};    
        default:
        return state;
    }
    return state;    
};

export default productsReducer;