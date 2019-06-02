import React from 'react';

import { connect } from 'react-redux';


const Single = ({match}) => (
    <div>
        <h1>Product {match.params.id}</h1>
        <div className="product__list__component__singleProduct">
            {/* <img className="product__list__component__singleProduct__image" src={props.product.image} alt="product presentation" /> */}
            <div className="product__list__component__singleProduct__name" >{props.product.name}</div>
            <div className="product__list__component__singleProduct__price" >cena: aaa{props.product.price} zł</div>
        </div>
    </div>
    
    
)


const mapStateToProps = function (store) {
    return {
        visibleProduct: store.productsReducer.visibleProduct,
    };
};

export default connect(mapStateToProps)(Single);