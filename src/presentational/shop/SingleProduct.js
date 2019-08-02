import React, { Component } from 'react';
import { connect } from 'react-redux';

class Single extends Component {
    // constructor(props) {
    //     super(props);
    //     //this.callToBuy = this.callToBuy.bind(this)
    // }

    callToBuy(amount) {
        if (amount < 50) {
            return `Spiesz się, ostatnie sztuki`
        } else {
            return `Spokojnie, mamy tego furę`
        }
    }

    render() {
        const name = this.props.visibleProduct.map(product => product.name)
        const price = this.props.visibleProduct.map(product => product.price)
        const buyOrDie = this.callToBuy(this.props.visibleProduct.map(product => product.magazine_amount))

        return (
            this.props.visibleProduct ? (
                <div>
                    <h1>Product</h1>
                    <div className="product__list__component__singleProduct">
                        <div className="product__list__component__singleProduct__name" >{name}</div>
                        <div className="product__list__component__singleProduct__price" >cena: {price} zł</div>
                    </div>
                    <span>{buyOrDie}</span>
                </div>
            ) : (
                <div>Jeszcze chwila</div>
            )
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visibleProduct: store.productsReducer.visibleProduct,
    };
};

export default connect(mapStateToProps)(Single);