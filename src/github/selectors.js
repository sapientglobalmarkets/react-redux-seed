import { createSelector } from 'reselect';

export const selectGithub = () => (state) => state.get('github');

export const selectLoading = () => createSelector(
  selectGithub(),
  (githubState) => githubState.get('loading')
);

export const selectError = () => createSelector(
  selectGithub(),
  (githubState) => githubState.get('error')
);

export const selectOrgName = () => createSelector(
  selectGithub(),
  (githubState) => githubState.get('orgName')
);

export const selectRepos = () => createSelector(
  selectGithub(),
  (githubState) => githubState.get(['repos'])
);
