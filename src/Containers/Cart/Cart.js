import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import List from '../../Components/CartList/CartList';
import classes from './Cart.module.css';
import ContinueButton from '../../Components/UI/ContinueButton/ContinueButton';
import CancelButton from '../../Components/UI/CancelButton/CancelButton';

class Cart extends Component {

    closePageHandler = () => {
        this.props.history.goBack()
    }

    continuePageHandler = () => {
        this.props.history.push('/invoice')
    }

    clearCartHandler = () => {
        let clearCart = null
        if(this.props.selected.length > 0) {
            clearCart = window.confirm('Are you sure about removing all products?');
            if(clearCart === true) {
                return this.props.onDelete()
            } else {
                return
            }
        }
    }

    render() {
        return (
            <div>
                <p className={classes.headerText}>YOUR CART</p>
                <button className={classes.clearButton} onClick={this.clearCartHandler}>Clear Cart</button>
                <div className={classes.listWrapper}>
                    {this.props.selected.length < 1 ? <h2 className={classes.noProductText}>Please add products</h2> : <List /> }
                    {this.props.selected.length < 1 ? null : <p className={classes.priceText}>Total price: {this.props.price} $</p>}
                </div>
                <div className={classes.buttonWrapper}>
                    <CancelButton onClick={this.closePageHandler} />
                    <ContinueButton onClick={this.continuePageHandler} selected={this.props.selected} disabled={this.props.selected.length < 1}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: () => {
            return dispatch({
                type: actionTypes.DELETE_CART
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        selected: state.productReducer.selectedItems,
        price: state.productReducer.selectedItems.reduce((a,b) => {return a + b.price}, 0)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)