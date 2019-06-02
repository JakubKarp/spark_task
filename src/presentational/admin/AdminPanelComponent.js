import React from 'react';
import styles from './AdminPanel.module.css'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { loadProductsFromMongo } from '../../actions/actions-data';
//import { countProducts } from '../actions/actions-products';


const AdminPanel = (props) => {
    const stateOfProducts = props.productsState.map(product =>
        <div>
            <div className={styles.products} >{product.name}: {product.magazine_amount} egz.</div>
        </div>
    )

    return (
        <div>
            <div className={styles.header} >Admin Panel</div>
            <Link to={'/admin'} >Link</Link>
            {stateOfProducts}
        </div>
    )
}

const mapStateToProps = function (store) {
    return {
        productsState: store.adminReducer.allProducts,
    };
};

export default connect(mapStateToProps)(AdminPanel);
