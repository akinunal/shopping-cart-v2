import React from 'react';
import FilterButton from '../UI/FilterButton/FilterButton';
import classes from './FilterBox.module.css';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

const FilterBox = (props) => {
    const removeFromStorage = () => {
        localStorage.clear()
    }

    const addToStorage = () => {
        localStorage.setItem("products", JSON.stringify(props.products));
        localStorage.setItem("selectedProducts", JSON.stringify(props.selected))
    }

    return (
         <div className={classes.filterBox}>
             <FilterButton onClick={props.onLowestFilter}>Short by low price</FilterButton>
             <FilterButton onClick={props.onHighestFilter}>Short by high price</FilterButton>
             <FilterButton onClick={props.onRandomFilter}>Short randomly</FilterButton> ||
             <FilterButton onClick={() => addToStorage()}>Remember Order</FilterButton>
             <FilterButton onClick={() => removeFromStorage()}>Forget Order</FilterButton>
         </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLowestFilter: () => {
            return dispatch({
                type: actionTypes.FILTER_BY_LOWEST
            })
        },
        onHighestFilter: () => {
            return dispatch({
                type: actionTypes.FILTER_BY_HIGHEST
            })
        },
        onRandomFilter: () => {
            return dispatch({
                type: actionTypes.FILTER_BY_RANDOM
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        selected: state.selectedItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)