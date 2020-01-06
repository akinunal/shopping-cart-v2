import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import classes from './ProductDetail.module.css';
import Button from '../../Components/UI/AddButton/AddButton';
import * as actionTypes from '../../store/actions/actions';

class ProductDetail extends Component {
    render() {
        return (
            <div className={classes.detailContainer}>
                <div className={classes.imgBox}>
                    <img src={this.props.product.imgUrl} alt='Shoes'/>
                </div>
                <div className={classes.productBox}>
                    <h1>{this.props.product.name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
                        upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className={classes.colorBox}>Choose a color: 
                        <NavLink className={classes.buttonBlack} to={`/products/${this.props.product.name}/black`} />
                        <NavLink className={classes.buttonBlue} to={`/products/${this.props.product.name}/blue`} />
                        <NavLink className={classes.buttonRed} to={`/products/${this.props.product.name}/red`} />
                        <span className={classes.priceText}>ONLY {this.props.product.price}$</span>
                    </div>
                    <Button onClick={() => this.props.onProductAdded(this.props.product)} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onProductAdded: (product) => {
          return dispatch({
            type: actionTypes.ADD_PRODUCT,
            payload: {
              product: product
            }
          });
        }
    }
}

const mapStateToProps = state => {
    return {
        product: state.activeProduct
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)