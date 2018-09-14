import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import userShow from './user_show';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    // profile: state.entities.profiles[ownProps.match.params.userId],
    pageOwner: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllPosts: (user, feed) => dispatch(fetchAllPosts(user, feed))
  };
};

export default connect(msp, mdp)(userShow);
