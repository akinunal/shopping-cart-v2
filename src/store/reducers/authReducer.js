import * as actionTypes from '../actions/actions';

const initialState = {
    user: {}
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        
        case actionTypes.LOGIN:
            return {
                ...state,
                user: action.payload.user
            }

        case actionTypes.LOGOUT:
            return {
                ...initialState
            }
        default:
            return state;
    }
};

export default auth