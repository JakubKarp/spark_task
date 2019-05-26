import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store-index';
import { loadProductsFromMongo, getProducts } from './actions/actions-products';
import RoutesDefinition from './routes';
import './App.css';



render(
    <div>
        <Provider store={store}>
            <RoutesDefinition />
        </Provider>

    </div>,
document.getElementById('root')
);

store.dispatch(loadProductsFromMongo())
store.dispatch(getProducts())

