import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';

import {clockReducer} from './clock';
import {githubReducer} from './github';

const devtools = window.devToolsExtension || (() => noop => noop);

/** Creates the main reducer with the asynchronously loaded ones */
function createReducer(asyncReducers) {
    return combineReducers({
        clock: clockReducer,
        github: githubReducer,
        ...asyncReducers
    });
}

export default function configureStore(initialState = {}) {
    // Create the store with thunk middleware
    const middlewares = [thunk];

    const enhancers = [
        applyMiddleware(...middlewares),
        devtools()
    ];

    const store = createStore(
        createReducer(),
        initialState,
        compose(...enhancers)
    );

    // Initialize it with no other reducers
    store.asyncReducers = {};
    return store;
}
