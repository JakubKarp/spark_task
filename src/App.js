import React from 'react';
import ProductContainer from './containers/ProductContainer.js';
import HeaderContainer from './containers/HeaderContainer'

const App = () => {
  return (
    <div className="App">
        <HeaderContainer />
        <ProductContainer />
    </div>
  );
};

export default App;
