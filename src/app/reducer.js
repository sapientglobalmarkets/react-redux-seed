import { combineReducers } from 'redux';
import { clockReducer } from '../clock';
import { githubReducer } from '../github';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
    return combineReducers({
        clock: clockReducer,
        github: githubReducer,
        ...asyncReducers
    });
}
