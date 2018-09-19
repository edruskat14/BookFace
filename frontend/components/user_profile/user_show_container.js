import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import userShow from './user_show';
import { fetchUser, fetchFriends } from '../../actions/user_actions';
import { fetchNotifications } from '../../actions/notification_actions';
import { fetchFriendRequests } from '../../actions/friend_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    pageOwner: state.entities.users.general[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts),
    friendsWith: state.entities.users.friends[ownProps.match.params.userId]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllPosts: (userId, feed) => dispatch(fetchAllPosts(userId, feed)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchNotifications: (user) => dispatch(fetchNotifications(user)),
    fetchFriendRequests: (user) => dispatch(fetchFriendRequests(user)),
    fetchFriends: (user) => dispatch(fetchFriends(user))
  };
};

export default connect(msp, mdp)(userShow);
