import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';

export const fetchUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchUsers().then((users) => {
      return dispatch({ type: RECEIVE_ALL_USERS, users })
    });
  };
};

export const fetchFriends = (id) => {
  return dispatch => {
    return UserApiUtil.fetchFriends(id).then((friends) => {
      return dispatch({ type: RECEIVE_ALL_FRIENDS, friends })
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

export const updateUser = (user, data) => {
  return dispatch => {
    return UserApiUtil.updateUser(user, data).then((user) => {
      return dispatch({ type: RECEIVE_USER, user });
    });
  };
};
