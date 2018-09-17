import { RECEIVE_ALL_REQUESTS, REQUEST_FRIEND, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';

const friendRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_REQUESTS:
      return action.friendships;
    case REQUEST_FRIEND:
      return Object.assign({}, state, { [action.friendship.id]: action.friendship });
    case RECEIVE_FRIEND:
      const stateNew = Object.assign({}, state);
      delete stateNew[action.friendship.id];
      return stateNew;
    case REMOVE_FRIEND:
      const newState = Object.assign({}, state);
      delete newState[action.friendship.id];
      return newState;
    default:
      return state;
  }
};

export default friendRequestReducer;
