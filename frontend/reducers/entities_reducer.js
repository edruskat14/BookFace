import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';
import postsReducer from './posts_reducer';
import friendsReducer from './friends_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  profiles: profilesReducer,
  posts: postsReducer,
  friends: friendsReducer
});

export default entitiesReducer;
