//import { createStore, combineReducers } from 'redux';
import { createStore } from 'redux';
import reducers from '../reducers/reducer-index';

const store = createStore(
    reducers
);

export default store;
