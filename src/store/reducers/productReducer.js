import * as actionTypes from '../actions/actions';

const initialState = {
    products: [],
    selectedItems: [],
    originalSort: [],
    activeProduct: {},
    isLoading: true
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
            const slcItems = [...state.selectedItems, action.payload.product]
            localStorage.setItem("selectedProducts", JSON.stringify(slcItems));
            return {
                ...state,
                selectedItems: slcItems
            }
        case actionTypes.DELETE_PRODUCT:
            const selectItem = [...state.selectedItems];
            selectItem.splice(action.payload, 1);
            localStorage.setItem("selectedProducts", JSON.stringify(selectItem));
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
            const filterByLowest = state.products.slice().sort((a, b) => a.price > b.price ? 1 : -1);
            localStorage.setItem("products", JSON.stringify(filterByLowest));
            return {
                ...state,
                products: filterByLowest
            }
        case actionTypes.FILTER_BY_HIGHEST:
            const filterByHighest = state.products.slice().sort((a, b) => a.price > b.price ? -1 : 1);
            localStorage.setItem("products", JSON.stringify(filterByHighest));
            return {
                ...state,
                products: filterByHighest
            }
        case actionTypes.FILTER_BY_RANDOM:
            const filterByRandom = state.products.slice().sort(() => Math.random() - 0.5);
            localStorage.setItem("products", JSON.stringify(filterByRandom));
            return {
                ...state,
                products: filterByRandom
            }
        case actionTypes.FETCH_LIST_FROM_STORAGE:
            return {
                ...state,
                selectedItems: action.payload
            }
        case actionTypes.DELETE_CART:
            localStorage.removeItem('selectedProducts')
            return {
                ...state,
                selectedItems: initialState.selectedItems
            }
        default:
            return state;
    }
};

export default reducer