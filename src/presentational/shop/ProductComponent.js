import React from 'react';
import { getProduct } from '../../actions/actions-products';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Single from './SingleProduct';

const ProductLabel = (props) => (
    <div 
        className="product__list__component__singleProduct"
        //onClick={props.dispatch(getProduct(props.product._id))}
    >
    {/* <Link to={"/" + props.product.id }> */}
    {/* <Link to={'/lulu'} > */}

        {/* <img className="product__list__component__singleProduct__image" src={props.product.image} alt="product presentation" /> */}

        <div className="product__list__component__singleProduct__name" >{props.product.name}</div>
        <div className="product__list__component__singleProduct__price" >cena: {props.product.price} zł</div>
    {/* </Link> */}

    </div>
);

export default ProductLabel;
