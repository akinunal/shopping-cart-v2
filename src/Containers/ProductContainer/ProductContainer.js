import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionTypes from '../../store/actions/actions';
import classes from './ProductContainer.module.css';

import Spinner from '../../Components/UI/Spinner/Spinner';
import Product from '../../Components/Product/Product';
import FilterBox from '../../Components/FilterBox/FilterBox';
import {Lightbox} from 'react-modal-image';

class ProductContainer extends PureComponent {
  state = {
    open: false,
    activeProduct: null
  }

  componentDidMount() {
    let productsList = localStorage.getItem("products");
    let selectedProducts = localStorage.getItem("selectedProducts");

    if(selectedProducts) {
      selectedProducts = JSON.parse(selectedProducts);
      this.props.onReload(selectedProducts);
    }

    if(productsList) {
      productsList = JSON.parse(productsList);
        this.props.onFetch(productsList);
        setTimeout(() => {
          this.props.isLoading(false);
          }, 2500);
    } else {
      axios.get("https://my-json-server.typicode.com/jubs16/Products/Products")
      .then(res => {
        this.props.onFetch(res.data);
        setTimeout(() => {
        this.props.isLoading(false);
        }, 2500);
      })
      .catch(err => console.log(err));
    }
  }

  modalHandler = (product) => {
    this.setState({
      open: true,
      activeProduct: product
    })
  }

  render() {
      return (
        <div className={classes.containerWrapper}>
          <FilterBox />
          <div className={classes.productWrapper}>
            {this.props.loading ? <Spinner /> : <Product onClick={(el) => {this.modalHandler(el)}} />}
            {this.state.open && (
                    <Lightbox
                        medium={this.state.activeProduct.imgUrl}
                        large={this.state.activeProduct.imgUrl}
                        alt={this.state.activeProduct.name}
                        onClose={() => this.setState({ open: false })}
                    />
                )}
          </div>
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    selected: state.selectedItems,
    loading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
    return {
      onFetch: (products) => {
        return dispatch({
          type: actionTypes.FETCH_PRODUCTS,
          payload: {
            products: products
          }
        });
      },

      isLoading: (value) => {
        return dispatch({
          type: actionTypes.LOADING_SPINNER,
          payload: value
        })
      },
      onReload: (products) => {
        return dispatch({
          type: actionTypes.FETCH_LIST_FROM_STORAGE,
          payload: products
        })
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)