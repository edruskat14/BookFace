import { RECEIVE_USER_SEARCH } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SEARCH:
      return action.users;
    default:
      return state;
  };
};

export default searchReducer;
