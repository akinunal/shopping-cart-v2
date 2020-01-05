import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../../Components/CartList/CartList';
import classes from './Cart.module.css';

class Cart extends Component {

    render() {
        return (
            <div>
                {this.props.selected.length < 1 ? <h2 className={classes.noProductText}>Please add products</h2> : <List /> }
                <p className={classes.priceText}>Total price: {this.props.price} $</p>
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