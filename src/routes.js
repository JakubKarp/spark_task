import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import Product from './presentational/shop/SingleProduct';

import Lulu from './strona2';

const RoutesDefinition = () => (
    <Router>
        <Route path='/' exact component={App}/>
        <Route path='/prod/:id' component={Lulu}/>
    </Router>

);

export default RoutesDefinition