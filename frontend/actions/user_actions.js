import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchUsers().then((users) => {
      return dispatch({ type: RECEIVE_ALL_USERS, users })
    });
  };
};
