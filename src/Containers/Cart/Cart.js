import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../../Components/CartList/CartList';
import classes from './Cart.module.css';
import ContinueButton from '../../Components/UI/ContinueButton/ContinueButton';
import CancelButton from '../../Components/UI/CancelButton/CancelButton';

class Cart extends Component {

    closePageHandler = () => {
        this.props.history.push('/')
    }

    continuePageHandler = () => {
        this.props.history.push('/invoice')
    }

    render() {
        return (
            <div>
                <p className={classes.headerText}>YOUR CART</p>
                <div className={classes.listWrapper}>
                    {this.props.selected.length < 1 ? <h2 className={classes.noProductText}>Please add products</h2> : <List /> }
                    {this.props.selected.length < 1 ? null : <p className={classes.priceText}>Total price: {this.props.price} $</p>}
                </div>
                <div className={classes.buttonWrapper}>
                    <CancelButton onClick={this.closePageHandler} />
                    <ContinueButton onClick={this.continuePageHandler} selected={this.props.selected}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selected: state.selectedItems,
        price: state.selectedItems.reduce((a,b) => {return a + b.price}, 0)
    }
}

export default connect(mapStateToProps)(Cart)