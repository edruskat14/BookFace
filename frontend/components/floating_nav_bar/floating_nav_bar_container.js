import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import FloatingNavBar from './floating_nav_bar';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users.general[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(FloatingNavBar)
