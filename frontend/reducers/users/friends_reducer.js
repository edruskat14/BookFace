import { RECEIVE_ALL_FRIENDS } from '../../actions/user_actions';

const friendsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friends;
    default:
      return state;
  }
};

export default friendsReducer;
