import githubReducer from './reducer';
import * as actions from './actions';

describe('Github Reducer', () => {

    const initialState = {
        loading: false,
        error: false,
        orgName: '',
        repos: []
    };

    it('should handle CHANGE_ORGNAME', () => {
        const action = actions.changeOrgName('facebook');
        const newState = githubReducer(initialState, action);
        expect(newState.orgName).to.equal('facebook');
    });

    it('should handle FETCH_REPOS_REQUEST', () => {
        const action = actions.fetchReposRequest();
        const newState = githubReducer(initialState, action);
        expect(newState.loading).to.be.true;
        expect(newState.error).to.be.false;
    });

    it('should handle FETCH_REPOS_SUCCESS', () => {
        const action = actions.fetchReposSuccess([ {name: 'react'} ]);
        const newState = githubReducer(initialState, action);
        expect(newState.loading).to.be.false;
        expect(newState.error).to.be.false;
        expect(newState.repos[0].name).to.equal('react');
    });

    it('should handle FETCH_REPOS_FAILURE', () => {
        const action = actions.fetchReposFailure('Org not found');
        const newState = githubReducer(initialState, action);
        expect(newState.loading).to.be.false;
        expect(newState.error).to.equal('Org not found');
    });

});
