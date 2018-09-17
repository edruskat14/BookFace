import { RECEIVE_ALL_FRIENDS } from '../../actions/user_actions';
import { REMOVE_FRIEND, RECEIVE_FRIEND } from '../../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friends;
    case RECEIVE_FRIEND:
      const newState =  Object.assign({}, state);
      delete newState[action.friendship.id];
      return newState;
    case REMOVE_FRIEND:
      return state;
      // TODO
    default:
      return state;
  }
};

export default friendsReducer;
