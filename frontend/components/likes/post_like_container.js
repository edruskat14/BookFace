import { connect } from 'react-redux';
import PostLike from './post_like';
import { createPostLike, deletePostLike } from '../../actions/post_like_actions';

const msp = (state) => {
  return {
    postLikes: Object.values(state.entities.postLikes),
    currentUser: state.entities.users.general[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    createPostLike: (post, like) => dispatch(createPostLike(post, like)),
    deletePostLike: (like) => dispatch(deletePostLike(like))
  };
};

export default connect(msp, mdp)(PostLike);
