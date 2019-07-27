import React, { Component } from 'react';
import { connect } from 'react-redux';

class Single extends Component {
    constructor(props) {
        super(props);
    }
    //console.log("TCL: store.productsReducer.visibleProduct", visibleProduct)
    render() {
        return (
            <div>
                <h1>Product</h1>
                <div className="product__list__component__singleProduct">
                    {/* <img className="product__list__component__singleProduct__image" src={props.product.image} alt="product presentation" /> */}
                    <div className="product__list__component__singleProduct__name" >{this.props.visibleProduct.name}dsvvsd</div>
                    <div className="product__list__component__singleProduct__price" >cena: {this.props.visibleProduct.price} zł</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visibleProduct: store.productsReducer.visibleProduct,
    };
};

export default connect(mapStateToProps)(Single);