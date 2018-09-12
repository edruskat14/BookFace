import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
    oppositeFormType: 'login',
    defaultState: {username: '', password: ''}
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm)
