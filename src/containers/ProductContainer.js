import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategory, setColor, removeFilter } from '../actions/actions-products';
import ProductLabelList from '../presentational/shop/ProductListComponent';

class ProductContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCategoryMenu: false,
            showColorMenu: false,
            filterName: ''
        };
          
        this.showCategoryMenu = this.showCategoryMenu.bind(this);
        this.showColorMenu = this.showColorMenu.bind(this);
        this.closeCategoryMenu = this.closeCategoryMenu.bind(this);
        this.closeColorMenu = this.closeColorMenu.bind(this); 
    }

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

    closeCategoryMenu(ev) {
        ev.preventDefault();
        if (!this.dropdownMenu.contains(ev.target)) {
        this.setState({ showCategoryMenu: false }, () => {
            document.removeEventListener('click', this.closeCategoryMenu);
          });  
        }
      }
    
    closeColorMenu(ev) {
        ev.preventDefault();
        if (!this.dropdownMenu.contains(ev.target)) {
        this.setState({ showColorMenu: false }, () => {
            document.removeEventListener('click', this.closeColorMenu);
          });  
        }
      }  
    
    chooseCategory(event) {
        (this.props.dispatch(setCategory(event.target.value)));
        
    }

    chooseColor(event) {
        (this.props.dispatch(setColor(event.target.value)));
        
    }

    

    //tu nie działa
    // removeFilter(event) {
    //     this.props.dispatch(removeFilter(event))
    // }
    
    render() {
        //const filterName = this.props.filter ? (this.props.filter.map(product => product.category).slice(0,1)) && (this.props.filter.map(product => product.color).slice(0,1)) : '';
        //this.props.visibleProducts
        //console.log("TCL: render -> this.props.visibleProducts", this.props.visibleProducts)
        //this.props.filter
		console.log("TCL: render -> this.props.filter", this.props.filter)
        return (
            <div>
                <div className="dropdown">
                    <div className="dropdown__component">                
                        <button className="dropdown__component__button" onClick={this.showCategoryMenu}>
                            Kategoria
                        </button>
                        {
                        this.state.showCategoryMenu
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
                        <button className="dropdown__component__button" onClick={this.showColorMenu}>
                            Color
                        </button>
                            
                        {
                        this.state.showColorMenu
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
                <div> { this.props.filter ? `Filtrujesz według: ${this.props.filter}` : '' }</div>
                {/* <span onClick={this.removeFilter} >Usuń filtr</span>  */}
                <ProductLabelList 
                    
                    products={this.props.visibleProducts} 
                />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visibleProducts: store.productsReducer.visibleProducts,
        filter: store.productsReducer.filter
    };
};

export default connect(mapStateToProps)(ProductContainer);
