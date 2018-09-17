import * as FriendApiUtil from '../util/friend_api_util';

export const RECEIVE_ALL_REQUESTS = 'RECEIVE_ALL_REQUESTS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

export const fetchFriendRequests = (user) => {
  return dispatch => {
    return FriendApiUtil.fetchFriendRequests(user).then((friendships) => {
      return dispatch({ type: RECEIVE_ALL_REQUESTS, friendships });
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
export const removeFriend = (friendship) => {
  return dispatch => {
    return FriendApiUtil.removeFriend(friendship).then((friendship) => {
      return dispatch({ type: REMOVE_FRIEND, friendship });
    });
  };
};
