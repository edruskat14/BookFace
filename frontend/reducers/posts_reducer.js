import {RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return Object.assign({}, state, { [action.post.wall_id]: action.post });
    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.post.wall_id];
      return newState;
    default:
      return state;
  }
}

export default postsReducer;
