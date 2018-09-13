import Feed from './feed';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Feed);
