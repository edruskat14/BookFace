import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return Object.assign({}, state,{ [action.comment.id]: action.comment })
    case REMOVE_COMMENT:
      newState = Object.assign({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
}

export default commentsReducer;
