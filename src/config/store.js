import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import rootReducer from '../reducers/rootReducer';
export default function configureStore(initialState={}) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger, thunk)
    );
}