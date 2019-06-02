import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import singleProduct from './presentational/shop/SingleProduct';
import AdminPanel from './presentational/admin/AdminPanelComponent';
import Lulu from './strona2';

const RoutesDefinition = () => (
    <Router>
        <Route path='/' exact component={App}/>
        <Route path='/prod/:id' component={singleProduct}/>
        <Route path='/admin' component={AdminPanel}/>
    </Router>
);

export default RoutesDefinition