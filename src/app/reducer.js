import { combineReducers } from 'redux';
import { feature1Reducer } from '../feature1';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
    return combineReducers({
        feature1: feature1Reducer,
        ...asyncReducers
    });
}
