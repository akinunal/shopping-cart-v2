import React from 'react';
import classes from './FilterButton.module.css';

const FilterButton = (props) => {
    return (
        <button className={classes.filter} onClick={props.onClick}>{props.children}</button>
    )
}

export default FilterButton