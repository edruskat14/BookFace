import { RECEIVE_POST_LIKE, REMOVE_POST_LIKE } from '../actions/post_like_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const postLikesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      const allPostLikes = action.data.postLikes
      const returnState = {};
      allPostLikes.forEach((like) => {
        return Object.keys(like).forEach((key) => returnState[key] = like[key]);
      });
      return returnState;
    case RECEIVE_POST_LIKE:
      return Object.assign({}, state, { [action.postLike.id]: action.postLike });
    case REMOVE_POST_LIKE:
      const newState = Object.assign({}, state);
      delete newState[action.postLike.id];
      return newState;
    default:
      return state;
  };
};

export default postLikesReducer;
