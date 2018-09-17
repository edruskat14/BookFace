import {RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return Object.assign({}, state, { [action.post.id]: action.post });
    case RECEIVE_COMMENT:
    debugger
      let newComObj = Object.assign({}, state);
      newComObj[action.comment.post_id].comments.push(action.comment);
      return newComObj;
    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
}

export default postsReducer;
