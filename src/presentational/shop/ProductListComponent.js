import React from 'react';
import ProductLabel from './ProductComponent';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ProductLabelList = (props) => (
    <div className="product__list">
        <div className="product__list__component">
            {props.products && props.products.map(product => {
                return (
                    <div key={product.id}  >
                        <ProductLabel key={product.id} product={product} />
                        <div><Link to={`/prod/${product.id}` } >Link </Link></div>
                    </div>
                )
            })}
        </div>
    </div>    
);

export default ProductLabelList;

