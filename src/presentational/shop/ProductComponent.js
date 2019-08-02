import React, { Component } from 'react';
import store from '../../store/store-index';
import { getProduct } from '../../actions/actions-products';

//import Single from './SingleProduct';

class ProductLabel extends Component {
    constructor(props) {
        super(props);
        this.goToOneProduct = this.goToOneProduct.bind(this)
    }

    goToOneProduct(id) {
        store.dispatch(getProduct(id))
    }

    render() {
        return (
            <div
                className="product__list__component__singleProduct"
                onClick={() => this.goToOneProduct(this.props.product._id)}
            >
                <div className="product__list__component__singleProduct__name" >{this.props.product.name}</div>
                <div className="product__list__component__singleProduct__price" >cena: {this.props.product.price} zł</div>
            </div>
        )
    }

};

export default ProductLabel;