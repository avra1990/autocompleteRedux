
import { SEARCH_AUTOCOMPLETE } from '../actionTypes/actionTypesSearch';

export const searchReducer = (state = { data: [], loading: true }) => {
    switch (action.type) {
        case SEARCH_AUTOCOMPLETE:
            return {
                loading: false,
                data: action.payload
            }
        default:
            return state;
    }
}