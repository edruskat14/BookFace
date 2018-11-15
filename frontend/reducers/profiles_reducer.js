import { RECEIVE_PROFILE } from '../actions/profile_actions';
// , RECEIVE_ALL_PROFILES
const usersProfileReducer = (state = {}, action) => {
  switch (action.type) {
    // case RECEIVE_ALL_PROFILES:
    //   return action.profiles;
    case RECEIVE_PROFILE:
      debugger
      return action.profile;
    default:
      return state;
  };
};

export default usersProfileReducer;
