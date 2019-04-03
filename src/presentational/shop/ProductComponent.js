import React from 'react';

const ProductLabel = (props) => (
    <div className="product__list__component__singleProduct">
        <img className="product__list__component__singleProduct__image" src={props.product.image} alt="product presentation" />
        <div className="product__list__component__singleProduct__name" >{props.product.name}</div>
        <div className="product__list__component__singleProduct__price" >cena: {props.product.price} zł</div>
    </div>
);

export default ProductLabel;
