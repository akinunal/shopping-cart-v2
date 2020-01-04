import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import classes from './Product.module.css';
import Button from '../UI/Button/Button';
import * as actionTypes from '../../store/actions/actions';

const Product = (props) => {
    let width, imgStyle, divSize;

    if (props.size) {
        width = { width: '45%' };
        imgStyle = {
            width: '100%',
            height: '250px'
        };
        divSize = { height: '150%' }
    } else {
        width = { width: '22%' };
        imgStyle = {
            width: '100%',
            height: '150px'
        }
    }

    return (
        props.products.map((el, i) => {
            return (
                <div style={width} className={classes.products}>
                    <div className={classes.imageBox} style={divSize}>
                        <img src={el.imgUrl} alt='imagePhoto' style={{ ...imgStyle }} className={classes.image} />
                    </div>
                    <Link to={`/products/${el.name}`} className={classes.productName} onClick={() => props.onProductClicked(el)}>{el.name}</Link>
                    <p className={classes.productPrice}>{'$' + el.price}</p>
                    <Button  onClick={() => props.onProductAdded(el)}/>
                </div>
            )
        })
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onProductAdded: (product) => {
          return dispatch({
            type: actionTypes.ADD_PRODUCT,
            payload: {
              product: product
            }
          });
        },
        
        onProductClicked: (product) => {
            return dispatch({
                type: actionTypes.ACTIVE_PRODUCT,
                payload: product
            })
        }
    }
}

const mapStateToProps = state => {
    return {
      products: state.products,
      selected: state.selectedItems
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product)