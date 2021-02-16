import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducerData} from '../reducers/reducerData';

const initState = {};
const middleware = [thunk];
const reducer = combineReducers({data: reducerData})

const store = createStore(reducer, initState, applyMiddleware(...middleware))

export default store;





