import {
    CHANGE_ORGNAME,
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE
} from './constants';

import {config, request} from '../core';

export function changeOrgName(orgName) {
    return {
        type: CHANGE_ORGNAME,
        orgName: orgName
    };
}

export function fetchRepos() {
    return (dispatch, getState) => {

        // Inform Redux that we are requesting repos
        dispatch(fetchReposRequest());

        const orgName = getState().github.orgName;
        return request(`${config.ORGS_URL}/${orgName}/repos?per_page=100`)
            .then(repos => dispatch(fetchReposSuccess(repos)))
            .catch(error => dispatch(fetchReposFailure(error)));
    };
}

export function fetchReposRequest() {
    return {
        type: FETCH_REPOS_REQUEST
    };
}

export function fetchReposSuccess(repos) {
    return {
        type: FETCH_REPOS_SUCCESS,
        repos
    };
}

export function fetchReposFailure(error) {
    return {
        type: FETCH_REPOS_FAILURE,
        error
    };
}
