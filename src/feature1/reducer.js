import {
    CHANGE_ORGNAME,
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE
} from './constants';

// The initial state of the App
const initialState = {
    loading: false,
    error: false,
    orgName: '',
    repos: []
};

function feature1Reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ORGNAME:
            return Object.assign({}, state, {
                orgName: action.orgName
            });
        case FETCH_REPOS_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: false,
                repos: []
            });
        case FETCH_REPOS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: false,
                repos: action.repos
            });
        case FETCH_REPOS_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });
        default:
            return state;
    }
}

export default feature1Reducer;
