import { combineReducers } from 'redux';
import { githubReducer } from '../github';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
    return combineReducers({
        github: githubReducer,
        ...asyncReducers
    });
}
