import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Product from './presentational/shop/SingleProduct';

import Lulu from './strona2';

export default (
    
    <Route path='/' exact component={App} >
      <Route path='/prod/:id' component={Lulu}/>
    </Route>
    
);