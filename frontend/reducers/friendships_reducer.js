import { RECEIVE_ALL_REQUESTS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_REQUESTS:
      return action.friendships;
    case RECEIVE_FRIEND:
      return Object.assign({}, state, { [action.friendship.id]: action.friendship })
    case REMOVE_FRIEND:
      const newState = Object.assign({}, state);
      delete newState[action.friendship.id];
      return newState;
    default:
      return state;
  }
};

export default friendsReducer;
