import Feed from './feed';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import { fetchProfiles } from '../../actions/profile_actions';
import { fetchUsers } from '../../actions/user_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(msp, mdp)(Feed);
