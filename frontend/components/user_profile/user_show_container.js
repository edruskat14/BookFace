import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions/post_actions';
import userShow from './user_show';
import { fetchUsers, fetchUser, fetchFriends } from '../../actions/user_actions';
import { fetchNotifications } from '../../actions/notification_actions';
import { fetchFriendships } from '../../actions/friendship_actions';
import { turnOnModal, turnOffModal } from '../../actions/ui_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    pageOwner: state.entities.users.general[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts),
    friendsWith: Object.values(state.entities.friendships.approved).some((ship) => {
      return ((ship.friender_id === state.session.id || ship.friendee_id === state.session.id) && (ship.friender_id.toString() === ownProps.match.params.userId || ship.friendee_id.toString() === ownProps.match.params.userId))
    }),
    modal: state.ui.modal
  };
};

const mdp = (dispatch) => {
  return {
    fetchAllPosts: (userId, feed) => dispatch(fetchAllPosts(userId, feed)),
    fetchUsers: (user) => dispatch(fetchUsers(user)),
    fetchUser: (user) => dispatch(fetchUser(user)),
    fetchNotifications: (user) => dispatch(fetchNotifications(user)),
    fetchFriendships: (id) => dispatch(fetchFriendships(id)),
    fetchFriends: (id) => dispatch(fetchFriends(id)),
    turnOnModal: () => dispatch(turnOnModal()),
    turnOffModal: () => dispatch(turnOffModal())
  };
};

export default connect(msp, mdp)(userShow);
