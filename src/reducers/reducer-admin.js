import { LOAD_PRODUCTS_ADMIN } from '../actions/actions-data';

const initialState = {
    allProducts: []
}

const adminReducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD_PRODUCTS_ADMIN:
            return {...state, allProducts: action.products};
        default:
            return state;
    }
}

export default adminReducer;