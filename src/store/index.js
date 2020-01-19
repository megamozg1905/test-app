import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';
/*
const middleware = [thunk];

const composeEnhancers =
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    compose; // eslint-disable-line

let state;
if (typeof window !== 'undefined') {
    state = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}*/
/*
const store = createStore(
    reducers,
    state,
    composeEnhancers(applyMiddleware(...middleware))
);*/

//export default { store };
export default (initialState) => createStore(reducers, initialState, applyMiddleware(thunkMiddleware));