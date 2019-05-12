import { GET_PRODUCTS, GET_PRODUCT, SET_CATEGORY, SET_COLOR, REMOVE_CATEGORY, REMOVE_COLOR } from '../actions/actions-products';
import { getFromMongo } from '../data/AxiosModule'
//import {productsData} from '../data/products.js';
//import {dataFromMongo} from '../data/dataFromMongo'
const initialState = {
    products: {
                 product_id: 15,
                 name: "omg rose",
                 category: "omg",
                 color: "rose",
                 price: "25.99",
                magazine_amount: 8
             },
    visibleProducts: [],
    visibleProduct: {},
    selectedCategory: null,
    selectedColor: null,
    filter: "",

};
console.log("state.products", initialState.products);
console.log("state.visibleProducts", initialState.visibleProduct);



const productsReducer =  function (state = initialState, action) {
    switch (action.type) {
        // case FETCH_PRODUCTS_BEGIN:
        //     return {...state, loading: true, error: null};
        // case FETCH_PRODUCTS_SUCCESS:
        //     console.log("action.payload.products", action.payload.products )
        //     return {...state, loading: false, products: action.payload.products};
        // case FETCH_PRODUCTS_FAILURE:
        //     return {...state, loading: false, error: action.payload.error, products: []};
        case GET_PRODUCTS:
        console.log("state.visibleProduct from case", state.visibleProduct)
            return {...state, visibleProducts: state.products};
        case GET_PRODUCT:
            const selectedProduct = state.products.find(product => product.id === parseInt(action.id));
            return {...state, visibleProduct: selectedProduct};
        case SET_CATEGORY:
            //state.selectedCategory = state.products.filter(product => product.category === action.category);
            state.selectedCategory = state.selectedColor !== null  ? state.selectedColor.filter(product => product.category === action.category) : state.products.filter(product => product.category === action.category) ;
            const filterCategory = state.selectedColor !== null  ? "color" : "category";
			return  {...state, visibleProducts: state.selectedCategory, filter: filterCategory};
        case SET_COLOR:
            state.selectedColor = state.selectedCategory !== null  ? state.selectedCategory.filter(product => product.color === action.color) : state.products.filter(product => product.color === action.color);
            const filterColor = state.selectedCategory !== null  ? "category" : "color";
            return  {...state, visibleProducts: state.selectedColor, filter: filterColor};
        case REMOVE_CATEGORY:
            state.selectedCategory !== null ?  state.selectedCategory = null : state;
            return  {...state, visibleProducts: state.products, filter: ""};
        case REMOVE_COLOR:
            state.selectedColor !== null ?  state.selectedColor = null : state;
            return  {...state, visibleProducts: state.products, filter: ""};
        default:
            return state;
    }
};

export default productsReducer;