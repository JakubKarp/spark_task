import React, { Component } from 'react';
import Header from '../presentational/shop/HeaderComponent';

class HeaderContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <Header /> 
        )
    }
}

export default HeaderContainer