import {createStore, applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

const middlware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlware)
));

export default store;
