import { combineReducers } from 'redux';
import productsReducer  from './reducer-products';
import adminReducer from './reducer-admin';

const reducers = combineReducers({
    productsReducer,
    adminReducer
});

export default reducers;