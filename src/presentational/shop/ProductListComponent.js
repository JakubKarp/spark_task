import React from 'react';
import ProductLabel from './ProductComponent';

import { Link } from "react-router-dom";

const ProductLabelList = (props) => (
    <div className="product__list">
        <div className="product__list__component">
            {props.products && props.products.map((product, idx) => {
                return (
                    <div key={product.id}  >
                        <Link key={idx} to={`/prod/${product.product_id}` } >
                            <ProductLabel key={product.id} product={product} />
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
);

export default ProductLabelList;

