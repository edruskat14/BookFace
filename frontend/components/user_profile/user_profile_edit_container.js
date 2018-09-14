import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import userProfileEdit from './user_profile_edit';


const msp = (state, ownProps) => {
  return {
    profile: state.entities.profiles[ownProps.match.params.userId],
    pageOwner: state.entities.users[ownProps.match.params.userId]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(userProfileEdit);
