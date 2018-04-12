import React from 'react';
import ProductLabel from './ProductComponent';

const ProductLabelList = (props) => (
    <div className="product__list">
        <div className="product__list__component">
            {props.products.map(product => {
                return (
                    <div  key={product.id}>
                        <ProductLabel key={product.id} product={product} />
                    </div>
                )
            })}
        </div>
    </div>    
);

export default ProductLabelList;

