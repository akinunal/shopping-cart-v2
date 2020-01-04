import * as actionTypes from '../actions/actions';

const initialState = {
    products: [],
    selectedItems: [],
    totalPrice: 0,
    originalSort: [],
    activeProduct: {},
    isLoading: true,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            }
        case actionTypes.LOADING_SPINNER:
            return {
                ...state,
                isLoading: action.payload
            }

        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.payload.product]
            }
        case actionTypes.DELETE_PRODUCT:
            return {
                ...state
            }
        case actionTypes.ACTIVE_PRODUCT:
            return {
                ...state,
                activeProduct: action.payload
            }

        default:
            return state;
    }
};

export default reducer