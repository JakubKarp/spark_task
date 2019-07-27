import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategory, setColor, removeCategory, removeColor } from '../actions/actions-products';
import ProductLabelList from '../presentational/shop/ProductListComponent';

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCategoryMenu: false,
            showColorMenu: false,
        };

        this.showCategoryMenu = this.showCategoryMenu.bind(this);
        this.showColorMenu = this.showColorMenu.bind(this);
        this.removeCategoryFilter = this.removeCategoryFilter.bind(this);
        this.removeColorFilter = this.removeColorFilter.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showCategoryMenu(ev) {
        ev.preventDefault();
        this.setState({ showCategoryMenu: true, showColorMenu: false }, () => {
          document.addEventListener('click', this.closeMenu);
        });
    }

    showColorMenu(ev) {
        ev.preventDefault();
        this.setState({ showColorMenu: true, showCategoryMenu: false }, () => {
          document.addEventListener('click', this.closeMenu);
        });
    }

    chooseCategory(event) {
        (this.props.dispatch(setCategory(event.target.value)));
        this.setState({ showCategoryMenu: false })
    }

    chooseColor(event) {
        (this.props.dispatch(setColor(event.target.value)));
        this.setState({ showColorMenu: false })
    }

    removeCategoryFilter() {
        (this.props.dispatch(removeCategory()));
    }

    removeColorFilter() {
        (this.props.dispatch(removeColor()));
    }

    closeMenu() {
        this.setState({ showColorMenu: false });
        this.setState({ showCategoryMenu: false });
        document.removeEventListener('click', this.closeMenu)
    }

    render() {
        const filterCategoryName = this.props.selectedCategory ? this.props.selectedCategory.map(product => product.category).slice(0,1) : '';
        const filterColorName = this.props.selectedColor ? this.props.selectedColor.map(product => product.color).slice(0,1) : '';
        const keyId = this.props.visibleProducts.map( product => product._id )

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
                { this.props.selectedCategory && this.props.filter === "category" ? <div className="filter_information" >Filtrujesz według: Kategorii {filterCategoryName}</div> : null }
                { this.props.selectedColor && this.props.filter === "color" ? <div className="filter_information">Filtrujesz według: Koloru {filterColorName}</div> : null }
                { this.props.visibleProducts.length > 0 ? <ProductLabelList products={this.props.visibleProducts} key={keyId} /> : "jeszcze ładuje"}
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visibleProducts: store.productsReducer.visibleProducts,
        selectedCategory: store.productsReducer.selectedCategory,
        selectedColor: store.productsReducer.selectedColor,
        filter: store.productsReducer.filter
    };
};

export default connect(mapStateToProps)(ProductContainer);