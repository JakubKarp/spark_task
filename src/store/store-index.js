//import { createStore, combineReducers } from 'redux';
import { createStore } from 'redux';
//import thunk from 'redux-thunk';
import reducers from '../reducers/reducer-index';

const store = createStore(
    reducers
);

export default store;
