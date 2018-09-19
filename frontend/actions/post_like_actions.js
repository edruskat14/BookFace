import * as PostLikeApiUtil from '../util/post_likes_api_util';

export const RECEIVE_POST_LIKE = 'RECEIVE_POST_LIKE';
export const REMOVE_POST_LIKE = 'REMOVE_POST_LIKE';

export const createPostLike = (post, postLike) => {
  return dispatch => {
    return PostLikeApiUtil.createPostLike(post, postLike).then((postLike) => {
      return dispatch({ type: RECEIVE_POST_LIKE, postLike });
    });
  };
};

export const deletePostLike = (postLike) => {
  return dispatch => {
    return PostLikeApiUtil.deletePostLike(postLike).then((postLike) => {
      return dispatch({ type: REMOVE_POST_LIKE, postLike });
    });
  };
};
