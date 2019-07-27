import React from 'react';
import ProductLabel from './ProductComponent';
import store from '../../store/store-index';
import { getProduct } from '../../actions/actions-products';

import { Link } from "react-router-dom";

const ProductLabelList = (props) => (
    <div className="product__list">
        <div className="product__list__component">
            {props.products && props.products.map((product, idx) => {
                return (
                    <div key={product._id} >
                        {/* //onClick={store.dispatch(getProduct(product._id))} - tego nie można dodać do diva, bo rozwala filtrowanie,  */}
                        <Link key={idx} to={`/prod/${product.product_id}` }>
                            <ProductLabel key={product.id} product={product} />
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
);

export default ProductLabelList;

