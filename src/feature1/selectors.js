import { createSelector } from 'reselect';

export const selectFeature1 = () => (state) => state.get('feature1');

export const selectLoading = () => createSelector(
  selectFeature1(),
  (feature1State) => feature1State.get('loading')
);

export const selectError = () => createSelector(
  selectFeature1(),
  (feature1State) => feature1State.get('error')
);

export const selectOrgName = () => createSelector(
  selectFeature1(),
  (feature1State) => feature1State.get('orgName')
);

export const selectRepos = () => createSelector(
  selectFeature1(),
  (feature1State) => feature1State.get(['repos'])
);
