export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'

export const fetchProductsPending = () => ({
    type: FETCH_PRODUCTS_PENDING
})

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchProductsFailed = (error) => ({
    type: FETCH_PRODUCTS_FAILED,
    error: error
})