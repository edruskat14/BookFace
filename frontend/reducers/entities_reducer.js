import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import profilesReducer from './profiles_reducer';
import postsReducer from './posts_reducer';
import friendshipsReducer from './friendships/friendships_reducer';
import commentsReducer from './comments_reducer';
import notificationsReducer from './notifications_reducer';
import postLikesReducer from './post_likes_reducer';
import searchReducer from './search_reducer';
import newsReducer from './news_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  profile: profilesReducer,
  posts: postsReducer,
  friendships: friendshipsReducer,
  comments: commentsReducer,
  notifications: notificationsReducer,
  postLikes: postLikesReducer,
  searchResults: searchReducer,
  news: newsReducer
});

export default entitiesReducer;
