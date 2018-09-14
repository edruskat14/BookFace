import { RECEIVE_PROFILE } from '../actions/profile_actions';
// , RECEIVE_ALL_PROFILES
const usersProfileReducer = (state = {}, action) => {
  switch (action.type) {
    // case RECEIVE_ALL_PROFILES:
    //   return action.profiles;
    case RECEIVE_PROFILE:
      const newState = Object.assign({}, state, { [action.profile.user.id]: action.profile });
      return newState;
    default:
      return state;
  };
};

export default usersProfileReducer;
