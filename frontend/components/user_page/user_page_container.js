import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserPage from './user_page';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    pageOwner: state.entities.users[ownProps.match.params.userId]
  };
};

const mdp= (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(UserPage);
