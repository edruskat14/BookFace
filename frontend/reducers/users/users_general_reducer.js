import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../../actions/user_actions';

const usersGeneralReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
}

export default usersGeneralReducer;
