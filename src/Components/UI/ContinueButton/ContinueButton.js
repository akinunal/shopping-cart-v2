import React from 'react';
import classes from "./ContinueButton.module.css";


const ContinueButton = (props) => {

    return (
        <button className={classes.continueButton} onClick={props.onClick}>CONTINUE</button>
    )
}
export default ContinueButton