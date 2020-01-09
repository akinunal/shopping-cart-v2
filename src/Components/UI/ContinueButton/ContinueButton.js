import React from 'react';
import classes from "./ContinueButton.module.css";


const ContinueButton = (props) => {

    return (
        <button className={classes.continueButton} onClick={props.onClick} disabled={props.disabled}>CONTINUE</button>
    )
}
export default ContinueButton