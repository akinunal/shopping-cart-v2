import React from 'react';
import {connect} from 'react-redux';
import './CartButton.css';
import {Link} from 'react-router-dom';
import * as actionTypes from '../../../store/actions/actions';

const cartButton = (props) => {
    return (
    <div className='wrapper'>
        <Link to='/cart' className='cartLink'>
            <ion-icon name="cart"></ion-icon>
            <span className='cartNumber'>{props.selected.length}</span>
        </Link>
    </div>
    )
}

const mapStateToProps = state => {
    return {
      selected: state.selectedItems
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCartClick: (url) => {
            return dispatch({
                type: actionTypes.GOTO_URL,
                payload: url
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartButton)