import React from 'react';
import styles from './AdminPanel.module.css'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const AdminPanel = (props) => {
    const stateOfProducts = props.productsState.map(product =>
        <div key={product._id} >
            <div className={styles.products}>{product.name}: {product.magazine_amount} egz.</div>
        </div>
    )
    const totalAmount = (props.productsState.map(product => product.magazine_amount))
        .reduce((previous, current) => previous + current, 0)

    return (
        <div>
            <div className={styles.header} >Admin Panel</div>
            <Link to={'/admin'} >Pełny panel</Link>
            {stateOfProducts}
            <div>Stan magazynu: {totalAmount} egz.</div>
        </div>
    )
}

const mapStateToProps = function (store) {
    return {
        productsState: store.adminReducer.allProducts,
    };
};

export default connect(mapStateToProps)(AdminPanel);
