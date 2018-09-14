import { RECEIVE_PROFILE_UPDATE, RECEIVE_ALL_PROFILES } from '../actions/profile_actions';

const usersProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PROFILES:
      return action.profiles;
    case RECEIVE_PROFILE_UPDATE:
      return action.profile;
    default:
      return state;
  };
};

export default usersProfileReducer;
