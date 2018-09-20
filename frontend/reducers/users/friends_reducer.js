import { RECEIVE_ALL_FRIENDS } from '../../actions/user_actions';
import { REMOVE_FRIEND, RECEIVE_FRIEND } from '../../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_FRIENDS:
      return Object.assign({}, state, action.friends);
    case RECEIVE_FRIEND:
      return state;
    case REMOVE_FRIEND:
      return state;
      const newState = Object.assign({}, state);
      delete newState[action.friendship.friender.id];
      return newState;
    default:
      return state;
  }
};

export default friendsReducer;
