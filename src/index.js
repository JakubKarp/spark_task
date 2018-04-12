import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store-index';
import { getProducts } from './actions/actions-products';
import App from './App'
import './App.css';

render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div> ,
document.getElementById('root')
);

store.dispatch(getProducts());

