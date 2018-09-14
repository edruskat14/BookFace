import { RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friendship;
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
