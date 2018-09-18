import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
    const allComs = action.data.comments
    const returnState = {};
    allComs.forEach((com) => {
      return Object.keys(com).forEach((key) => returnState[key] = com[key]);
    });
    return returnState;
    case RECEIVE_COMMENT:
      return Object.assign({}, state,{ [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      const newState = Object.assign({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
}

export default commentsReducer;
