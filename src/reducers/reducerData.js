import * as actions from '../actionTypes/actionTypes';

export const reducerData = (state = { data: [], loading: true }, action) => {
    switch (action.type) {
        case actions.DATA_REQUEST:
            return {
                loading: true,
                data: []
            }
        case actions.DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        case actions.DATA_ERROR:
            return {
                loading: false,
                error: 'error message'
            }
        default:
            return state;
    }
}



