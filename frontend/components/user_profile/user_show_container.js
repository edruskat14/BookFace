import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import userShow from './user_show';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    // profile: state.entities.profiles[ownProps.match.params.userId],
    pageOwner: state.entities.users.general[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllPosts: (user, feed) => dispatch(fetchAllPosts(user, feed)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(msp, mdp)(userShow);
