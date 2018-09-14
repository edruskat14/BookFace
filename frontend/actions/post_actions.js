import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const fetchAllPosts = (user, feed) => {
  return dispatch => {
    return PostApiUtil.fetchAllPosts(user, feed).then((posts) => {
      return dispatch({ type: RECEIVE_ALL_POSTS, posts });
    });
  };
};

export const createPost = (user, post) => {
  return dispatch => {
    return PostApiUtil.createPost(user, post).then((post) => {
      return dispatch({ type: RECEIVE_POST, post });
    });
  };
};
export const updatePost = (post) => {
  return dispatch => {
    return PostApiUtil.updatePost(post).then((post) => {
      return dispatch({ type: RECEIVE_POST, post });
    });
  };
};
export const deletePost = (post) => {
  return dispatch => {
    return PostApiUtil.deletePost(post).then((post) => {
      return dispatch({ type: REMOVE_POST, post });
    });
  };
};
