import {RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST, CLEAR_POSTS } from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      const allPosts = action.data.posts
      const returnState = {};
      allPosts.forEach((post) => {
        return Object.keys(post).forEach((key) => returnState[key] = post[key]);
      });
      return returnState;
    case RECEIVE_POST:
      return Object.assign({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.post.id];
      return newState;
    case CLEAR_POSTS:
      return {};
    default:
      return state;
  }
}

export default postsReducer;
