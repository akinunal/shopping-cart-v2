import React from 'react';
import classes from './Button.module.css';

const button = props => {
    return (
        <button className={classes.productButton} onClick={props.onClick}>ADD TO CART</button>
    )
}

export default button