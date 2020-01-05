import React from 'react';
import {connect} from 'react-redux';
import classes from './CartList.module.css';
import * as actionTypes from '../../store/actions/actions';

const cartList = (props) => {
    return(
        <div>
            <ul className={classes.listBox}>
            {props.selected.map((el,i) => {
            return <li className={classes.listTitle} key={i} onClick={() => props.removeItem(i)}>{el.name} x 1</li>
            })}
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: index => {
            return dispatch({
                type: actionTypes.DELETE_PRODUCT,
                payload: index
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        selected: state.selectedItems,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartList)