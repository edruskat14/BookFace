import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import { createComment } from '../../actions/comment_actions';
import { createNotification } from '../../actions/notification_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    comment: {body: ''}
  };
};

const mdp = (dispatch) => {
  return {
    createComment: (post, comment) => dispatch(createComment(post, comment)),
    createNotification: (user, notif) => dispatch(createNotification(user, notif))
  };
};

export default connect(msp, mdp)(CreateCommentForm);
