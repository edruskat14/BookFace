import { connect } from 'react-redux'
import { updateUser } from '../../actions/user_actions';
import ProPicForm from './pro_pic_form';

const msp = (state) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    modal: state.ui.modal
  };
};

const mdp = (dispatch) => {
  return {
    updateUser: (user, data) => dispatch(updateUser(user, data))
  };
};


export default connect(msp, mdp)(ProPicForm);
