import * as actionTypes from '../actions/actions';

const initialState = {
    products: [],
    selectedItems: [],
    originalSort: [],
    activeProduct: {},
    isLoading: true,
    user: {}
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
            const selectItem = [...state.selectedItems];
            selectItem.splice(action.payload, 1)
            return {
                ...state,
                selectedItems: selectItem
            }
        case actionTypes.ACTIVE_PRODUCT:
            return {
                ...state,
                activeProduct: action.payload
            }
        case actionTypes.FILTER_BY_LOWEST:
            return {
                ...state,
                products: state.products.slice().sort((a, b) => a.price > b.price ? 1 : -1)
            }
        case actionTypes.FILTER_BY_HIGHEST:
            return {
                ...state,
                products: state.products.slice().sort((a, b) => a.price > b.price ? -1 : 1)
            }
        case actionTypes.FILTER_BY_RANDOM:
            return {
                ...state,
                products: state.products.slice().sort(() => Math.random() - 0.5)
            }
        case actionTypes.FETCH_LIST_FROM_STORAGE:
            return {
                ...state,
                selectedItems: action.payload
            }   
        default:
            return state;
    }
};

export default reducer