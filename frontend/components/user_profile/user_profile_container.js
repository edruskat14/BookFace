import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import userProfile from './user_profile';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    profile: state.entities.users[ownProps.match.params.userId].profile,
    pageOwner: state.entities.users[ownProps.match.params.userId]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(userProfile);
