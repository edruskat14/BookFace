import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions/post_actions';
import userShow from './user_show';
import { fetchUsers, fetchFriends } from '../../actions/user_actions';
import { fetchNotifications } from '../../actions/notification_actions';
import { fetchFriendRequests } from '../../actions/friend_actions';
import { turnOnModal, turnOffModal } from '../../actions/ui_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    pageOwner: state.entities.users.general[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts),
    friendsWith: state.entities.users.friends[ownProps.match.params.userId],
    modal: state.ui.modal
  };
};

const mdp = (dispatch) => {
  return {
    fetchAllPosts: (userId, feed) => dispatch(fetchAllPosts(userId, feed)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchNotifications: (user) => dispatch(fetchNotifications(user)),
    fetchFriendRequests: (user) => dispatch(fetchFriendRequests(user)),
    fetchFriends: (user) => dispatch(fetchFriends(user)),
    turnOnModal: () => dispatch(turnOnModal()),
    turnOffModal: () => dispatch(turnOffModal())
  };
};

export default connect(msp, mdp)(userShow);
