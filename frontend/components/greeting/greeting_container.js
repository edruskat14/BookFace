import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = (state) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    errors: state.errors.session
  };
};

const mdp = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(Greeting);
