export const feature = 'github';

export const getLoading = (state) => state[feature].loading;
export const getError = (state) => state[feature].error;
export const getOrgName = (state) => state[feature].orgName;
export const getRepos = (state) => state[feature].repos;
