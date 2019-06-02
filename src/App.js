import React from 'react';
import ProductContainer from './containers/ProductContainer.js';
import HeaderContainer from './containers/HeaderContainer';
import AdminPanel from './presentational/admin/AdminPanelComponent';



const App = () => {
  return (
    <div className="App">
        <div className="shop">
          <HeaderContainer />
          <ProductContainer />
        </div>
        <div className="admin">
          <AdminPanel />
          
        </div>
    </div>
  );
};

export default App;
