import React from 'react';
import classes from './CancelButton.module.css';

const CancelButton = (props) => {
    return (
        <button className={classes.cancelButton} onClick={props.onClick}>CANCEL</button>
    )
}

export default CancelButton