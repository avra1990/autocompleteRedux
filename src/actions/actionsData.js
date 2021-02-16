import * as actions from '../actionTypes/actionTypes';

export const loadData = () => (dispatch) => {
    try {
        dispatch({ type: actions.DATA_REQUEST })
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                console.log('daatatat')
                dispatch({
                    type: actions.DATA_SUCCESS,
                    payload: data
                })
            })
    } catch (error) { console.log(error) }
}


