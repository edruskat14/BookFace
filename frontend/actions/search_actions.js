import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_USER_SEARCH = 'RECEIVE_USER_SEARCH';

export const searchUsers = (string) => {
  return dispatch => {
    return SearchApiUtil.searchUsers(string).then((users) => {
      return dispatch({ type: RECEIVE_USER_SEARCH, users });
    });
  };
};
