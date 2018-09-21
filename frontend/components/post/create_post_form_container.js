import { connect } from 'react-redux';
import CreatePostForm from './create_post_form';
import { createPost } from '../../actions/post_actions';
import { createNotification } from '../../actions/notification_actions';

const msp = (state, ownProps) => {

  return {
    currentUser: state.entities.users.general[state.session.id],
    post: {body: ''}
  };
};

const mdp = (dispatch) => {
  return {
    createPost: (user, post) => dispatch(createPost(user, post)),
    createNotification: (user, notif) => dispatch(createNotification(user, notif))
  };
};

export default connect(msp, mdp)(CreatePostForm);
