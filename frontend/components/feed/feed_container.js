import Feed from './feed';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers, fetchFriends } from '../../actions/user_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import { fetchFriendRequests } from '../../actions/friend_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    posts: Object.values(state.entities.posts),
    pendingRequests: Object.values(state.entities.pendingRequests)
  };
};

const mdp = (dispatch) => {
  return {
    fetchFriendRequests: (user) => dispatch(fetchFriendRequests(user)),
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFriends: (user) => dispatch(fetchFriends(user)),
    fetchAllPosts: (user, feed) => dispatch(fetchAllPosts(user, feed))
  };
};

export default connect(msp, mdp)(Feed);
