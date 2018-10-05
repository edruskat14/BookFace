import * as FriendshipApiUtil from '../util/friendship_api_util';

export const RECEIVE_ALL_FRIENDSHIPS = 'RECEIVE_ALL_FRIENDSHIPS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const REQUEST_FRIEND = 'REQUEST_FRIEND';

export const fetchFriendships = (id) => {
  return dispatch => {
    return FriendshipApiUtil.fetchFriendships(id).then((friendships) => {
      return dispatch({ type: RECEIVE_ALL_FRIENDSHIPS, friendships });
    });
  };
};
export const makeFriendRequest = (friendship) => {
  return dispatch => {
    return FriendshipApiUtil.makeFriendRequest(friendship).then((friendship) => {
      return dispatch({ type: REQUEST_FRIEND, friendship });
    });
  };
};
export const approveFriendRequest = (friendship) => {
  return dispatch => {
    return FriendshipApiUtil.approveFriendRequest(friendship).then((friendship) => {
      return dispatch({ type: RECEIVE_FRIEND, friendship });
    });
  };
};
export const removeFriend = (friendship) => {
  return dispatch => {
    return FriendshipApiUtil.removeFriend(friendship).then((friendship) => {
      return dispatch({ type: REMOVE_FRIEND, friendship });
    });
  };
};
