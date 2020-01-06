import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionTypes from '../../store/actions/actions';

import Spinner from '../../Components/UI/Spinner/Spinner';
import Product from '../../Components/Product/Product';
import classes from './ProductContainer.module.css';

class ProductContainer extends Component {

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

    render() {
        return (
          <div className={classes.wrapper}>
            {this.props.loading ? <Spinner /> : <Product />}
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