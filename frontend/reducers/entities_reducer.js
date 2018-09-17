import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import profilesReducer from './profiles_reducer';
import postsReducer from './posts_reducer';
import friendRequestReducer from './friend_request_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  profiles: profilesReducer,
  posts: postsReducer,
  pendingRequests: friendRequestReducer
});

export default entitiesReducer;
