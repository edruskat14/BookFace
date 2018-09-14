import Feed from './feed';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import { fetchProfiles } from '../../actions/profile_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchFriends } from '../../actions/friend_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFriends: (user) => dispatch(fetchFriends(user))
  };
};

export default connect(msp, mdp)(Feed);
