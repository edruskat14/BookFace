import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import FloatingNavBar from './floating_nav_bar';
import { deleteNotifications } from '../../actions/notification_actions';


const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    notifications: Object.values(state.entities.notifications),
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    deleteNotifications: (user) => dispatch(deleteNotifications(user))
  };
};

export default connect(msp, mdp)(FloatingNavBar)
