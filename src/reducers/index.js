import { FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from '../actions/index';

const initialState = {
    pending: false,
    products: [],
    error: null
}

export const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;