import * as FriendApiUtil from '../util/friend_api_util';

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

export const fetchFriends = (user) => {
  return dispatch => {
    return FriendApiUtil.fetchFriends(user).then((friendship) => {
      return dispatch({ type: RECEIVE_ALL_FRIENDS, friendship });
    });
  };
};
export const makeFriendRequest = (friendship) => {
  return dispatch => {
    return FriendApiUtil.makeFriendRequest(friendship).then((friendship) => {
      return dispatch({ type: RECEIVE_FRIEND, friendship });
    });
  };
};
export const approveFriendRequest = (friendship) => {
  return dispatch => {
    return FriendApiUtil.approveFriendRequest(friendship).then((friendship) => {
      return dispatch({ type: RECEIVE_FRIEND, friendship });
    });
  };
};
export const removeFriend = (user) => {
  return dispatch => {
    return FriendApiUtil.removeFriend(user).then((friendship) => {
      return dispatch({ type: REMOVE_FRIEND, friendship });
    });
  };
};
