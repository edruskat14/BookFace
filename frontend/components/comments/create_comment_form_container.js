import { connect } from 'react-redux';
import CreatePostForm from './create_post_form';
import { createComment } from '../../actions/post_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    comment: {body: ''}
  };
};

const mdp = (dispatch) => {
  return {
    createComment: (user, comment) => dispatch(createComment(user, comment))
  };
};

export default connect(msp, mdp)(CreateCommentForm);
