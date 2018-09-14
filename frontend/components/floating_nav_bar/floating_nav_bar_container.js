import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import floatingNavBar from './floating_nav_bar';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default
