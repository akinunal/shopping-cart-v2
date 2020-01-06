import React from 'react';
import classes from './AddButton.module.css';

const addButton = props => {
    return (
        <button className={classes.productButton} onClick={props.onClick}>ADD TO CART</button>
    )
}

export default addButton