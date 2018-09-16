import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER'

export const fetchUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchUsers().then((users) => {
      return dispatch({ type: RECEIVE_ALL_USERS, users })
    });
  };
};
export const fetchUser = (id) => {
  return dispatch => {
    return UserApiUtil.fetchUser(id).then((user) => {
      return dispatch({ type: RECEIVE_USER, user })
    });
  };
};
