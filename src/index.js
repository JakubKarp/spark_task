import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store-index';
import { getProducts } from './actions/actions-products';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './routes';
import App from './App'
import './App.css';
import Lulu from './strona2'


render(
    <div>
        <Provider store={store}>
            <Router>
                <Route path='/' exact component={App}/>
                <Route path='/prod/:id' component={Lulu}/>
            </Router>
        </Provider>

    </div>,
document.getElementById('root')
);

store.dispatch(getProducts());

