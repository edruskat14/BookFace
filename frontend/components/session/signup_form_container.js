import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    defaultState: {firstname: '', lastname: '', username: '', password: '', day: '' , month: '' , year: '' , gender: ''}
  };
};

const mdp = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SignupForm)
