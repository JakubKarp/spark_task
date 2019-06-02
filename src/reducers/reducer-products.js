import { GET_PRODUCTS, GET_PRODUCT, SET_CATEGORY, SET_COLOR, REMOVE_CATEGORY, REMOVE_COLOR } from '../actions/actions-products';
import { LOAD_PRODUCTS_SUCCESS } from '../actions/actions-data'

const initialState = {
    products: [],
    visibleProducts: [],
    visibleProduct: {},
    selectedCategory: null,
    selectedColor: null,
    filter: "",

};

const productsReducer =  function (state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS_SUCCESS:
            return{...state, products: action.products}
        case GET_PRODUCTS:
            return {...state, visibleProducts: state.products};
        case GET_PRODUCT:
            const selectedProduct = state.products.find(product => product.id === parseInt(action.id, 10));
            return {...state, visibleProduct: selectedProduct};
        case SET_CATEGORY:
            state.selectedCategory = state.selectedColor !== null  ? state.selectedColor.filter(product => product.category === action.category) : state.products.filter(product => product.category === action.category) ;
            const filterCategory = state.selectedColor !== null  ? "color" : "category";
			return  {...state, visibleProducts: state.selectedCategory, filter: filterCategory};
        case SET_COLOR:
            state.selectedColor = state.selectedCategory !== null  ? state.selectedCategory.filter(product => product.color === action.color) : state.products.filter(product => product.color === action.color);
            const filterColor = state.selectedCategory !== null  ? "category" : "color";
            return  {...state, visibleProducts: state.selectedColor, filter: filterColor};
        case REMOVE_CATEGORY:
            //state.selectedCategory = null;
            //state.selectedColor = null;
            state.selectedCategory !== null ?  state.selectedCategory = null : state;
            return  {...state, visibleProducts: state.products, filter: ""};
        case REMOVE_COLOR:
            //state.selectedColor = null;
            //state.selectedCategory = null;
            state.selectedColor !== null ?  state.selectedColor = null : state;
            return  {...state, visibleProducts: state.products, filter: ""};
        default:
            return state;
    }
};

export default productsReducer;