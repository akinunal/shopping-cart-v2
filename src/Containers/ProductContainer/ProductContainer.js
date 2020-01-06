import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionTypes from '../../store/actions/actions';

import Spinner from '../../Components/UI/Spinner/Spinner';
import Product from '../../Components/Product/Product';
import classes from './ProductContainer.module.css';
import {Lightbox} from 'react-modal-image';

class ProductContainer extends Component {

  state = {
    open: false
  }

  componentDidMount() {
        axios.get("https://my-json-server.typicode.com/jubs16/Products/Products")
        .then(res => {
          this.props.onFetch(res.data);
          setTimeout(() => {
          this.props.isLoading(false);
          }, 2500);
        })
        .catch(err => console.log(err));
  }

  modalHandler = (product) => {
    this.setState({
        open: true,
        activeProduct: product
    })
}

  render() {
      return (
          <div className={classes.wrapper}>
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
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)