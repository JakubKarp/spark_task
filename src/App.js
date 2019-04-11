import React from 'react';
import ProductContainer from './containers/ProductContainer.js';
import HeaderContainer from './containers/HeaderContainer';
import AdminPanel from './presentational/admin/AdminPanelComponent';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


const App = () => {
  return (
    
    <div className="App">
      
        <div className="shop">  
          <HeaderContainer />
          <ProductContainer />
        </div>
        <div className="admin">
          <AdminPanel />
          <Link to={'/prod/admin'} >Link</Link>
        </div>  
    </div>
    
  );
};

export default App;
