import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategory, setColor, removeCategory, removeColor } from '../actions/actions-products';
import axios from 'axios';
import ProductLabelList from '../presentational/shop/ProductListComponent';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
//import ProductLabel from '../presentational/shop/ProductComponent';


const Product = props => (
    <div>
        <div>{props.product.name}</div>
        <div>{props.product.category}</div>
        <div>{props.product.color}</div>
    </div>
)

class ProductContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCategoryMenu: false,
            showColorMenu: false,
            //filterCategoryStatus: false,
            //filterColorStatus: false
            products: []
        };

        this.showCategoryMenu = this.showCategoryMenu.bind(this);
        this.showColorMenu = this.showColorMenu.bind(this);
        //this.closeCategoryMenu = this.closeCategoryMenu.bind(this);
        //this.closeColorMenu = this.closeColorMenu.bind(this);
        //this.showFilterName = this.showFilterName.bind(this);
        this.removeCategoryFilter = this.removeCategoryFilter.bind(this);
        this.removeColorFilter = this.removeColorFilter.bind(this);
    }


    componentDidMount() {
        axios.get('http://localhost:4000/products')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    // productsList() {
    //     return this.state.products.map(function(currentProducts, i){
    //         return <ProductLabel product={currentProducts} key={i} />;
    //     })
    // }

    showCategoryMenu(ev) {
        ev.preventDefault();
        this.setState({ showCategoryMenu: true, showColorMenu: false }, () => {
          document.addEventListener('click', this.closeCategoryMenu);
        });
    }

    showColorMenu(ev) {
        ev.preventDefault();
        this.setState({ showColorMenu: true, showCategoryMenu: false }, () => {
          document.addEventListener('click', this.closeColorMenu);
        });
    }

    // closeCategoryMenu(ev) {
    //     ev.preventDefault();
    //     if (!this.dropdownMenu.contains(ev.target)) {
    //     this.setState({ showCategoryMenu: false }, () => {
    //         document.removeEventListener('click', this.closeCategoryMenu);
    //       });
    //     }
    //   }

    // closeColorMenu(ev) {
    //     ev.preventDefault();
    //     if (!this.dropdownMenu.contains(ev.target)) {
    //     this.setState({ showColorMenu: false }, () => {
    //         document.removeEventListener('click', this.closeColorMenu);
    //       });
    //     }
    // }

    chooseCategory(event) {
        (this.props.dispatch(setCategory(event.target.value)));
        //this.state.filterColorStatus !== true && this.setState({filterCategoryStatus: true})
        this.setState({ showCategoryMenu: false })
    }

    chooseColor(event) {
        (this.props.dispatch(setColor(event.target.value)));
        //this.state.filterCategoryStatus !== true && this.setState({filterColorStatus: true})
        this.setState({ showColorMenu: false })
    }

    // showFilterName() {
    //     if (this.props.selectedCategory) {
    //         this.setState({filterName: this.props.selectedCategory.map(product => product.category).slice(0,1)})

    //     } else if (this.props.selectedColor) {
    //         this.setState({filterName: this.props.selectedColor.map(product => product.category).slice(0,1)})

    //     } else {this.state.filterName}


    // }

    removeCategoryFilter(){
        (this.props.dispatch(removeCategory()));
        //this.setState({filterCategoryStatus: false})
        //this.state.filterColorStatus !== true && this.setState({filterCategoryStatus: true})
    }

    removeColorFilter(){
        (this.props.dispatch(removeColor()));
        //this.setState({filterCategoryStatus: false, filterColorStatus: false})
    }

    //const filterNameElement = <div> {  this.props.selectedCategory || this.props.selectedColor ? `Filtrujesz według: ${this.showFilterName()}` : '' }</div>

    //tu nie działa
    // removeFilter(event) {
    //     this.props.dispatch(removeFilter(event))
    // }

    render() {

        const filterCategoryName = this.props.selectedCategory ? this.props.selectedCategory.map(product => product.category).slice(0,1) : '';
        const filterColorName = this.props.selectedColor ? this.props.selectedColor.map(product => product.color).slice(0,1) : '';
        //this.props.visibleProducts
        //console.log("TCL: render -> this.props.visibleProducts", this.props.visibleProducts)
        //this.props.filter
		return (
            <div>
                <div className="dropdown">
                    <div className="dropdown__component">
                        {this.props.selectedCategory && this.props.filter === "category" ? <button className="dropdown__component__button" onClick={() => this.removeCategoryFilter() }>USUŃ FILTR</button> : <button className="dropdown__component__button" onClick={this.showCategoryMenu}>Kategoria</button>}
                        {this.state.showCategoryMenu
                            ? (
                            <div onClick={e => this.chooseCategory(e)}
                                className="dropdown__component__list"
                                ref={(element) => {
                                this.dropdownMenu = element;
                                }}
                            >
                                <button className="dropdown__component__list__element" value="kakle"> Kakle </button>
                                <button className="dropdown__component__list__element" value="mono"> Mono </button>
                                <button className="dropdown__component__list__element" value="norway"> Norway </button>
                                <button className="dropdown__component__list__element" value="omg"> Omg </button>
                            </div>
                            )
                            : (
                            null
                            )
                        }
                    </div>
                    <div className="dropdown__component">
                    {this.props.selectedColor && this.props.filter === "color" ? <button className="dropdown__component__button" onClick={() => this.removeColorFilter() }>USUŃ FILTR</button> : <button className="dropdown__component__button" onClick={this.showColorMenu}>Kolor</button>}
                    {this.state.showColorMenu
                        ? (
                        <div onClick={e => this.chooseColor(e)}
                            className="dropdown__component__list"
                            ref={(element) => {
                            this.dropdownMenu = element;
                            }}
                        >
                            <button className="dropdown__component__list__element" value="blue"> Blue </button>
                            <button className="dropdown__component__list__element" value="green"> Green </button>
                            <button className="dropdown__component__list__element" value="rose"> Rose </button>
                            <button className="dropdown__component__list__element" value="yellow"> Yellow </button>
                        </div>
                        )
                        : (
                        null
                        )
                    }
                    </div>
                </div>
                {  this.props.selectedCategory && this.props.filter === "category" ? <div className="filter_information" >Filtrujesz według: Kategorii {filterCategoryName}</div> : null }
                {  this.props.selectedColor && this.props.filter === "color" ? <div className="filter_information">Filtrujesz według: Koloru {filterColorName}</div> : null }
                {/* <span onClick={this.removeFilter} >Usuń filtr</span>  */}
                    <ProductLabelList products={this.state.products} />
                
                {/* <ProductLabelList

                    products={this.props.visibleProducts}

                /> */}

            </div>
        )
    }
}

// const mapStateToProps = function (store) {
//     return {
//         visibleProducts: store.productsReducer.visibleProducts,
//         selectedCategory: store.productsReducer.selectedCategory,
//         selectedColor: store.productsReducer.selectedColor,
//         filter: store.productsReducer.filter
//     };
// };

//export default connect(mapStateToProps)(ProductContainer);
export default ProductContainer;