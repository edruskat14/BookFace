import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const fetchAllComments = (posts) => {
  return dispatch => {
    return CommentApiUtil.fetchAllComments(posts).then((comments) => {
      return dispatch({ type: RECEIVE_ALL_COMMENTS, comments });
    });
  };
};
export const createComment = (post, comment) => {
  return dispatch => {
    return CommentApiUtil.createComment(post, comment).then((comment) => {
      return dispatch({ type: RECEIVE_COMMENT, comment });
    });
  };
};
export const updateComment = (comment) => {
  return dispatch => {
    return CommentApiUtil.updateComment(comment).then((comment) => {
      return dispatch({ type: RECEIVE_COMMENT, comment });
    });
  };
};
export const deleteComment = (comment) => {
  return dispatch => {
    return CommentApiUtil.deleteComment(comment).then((comment) => {
      return dispatch({ type: REMOVE_COMMENT, comment });
    });
  };
};
