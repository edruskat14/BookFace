import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    defaultState: {username: '', password: ''}
  };
};

const mdp = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(LoginForm)
