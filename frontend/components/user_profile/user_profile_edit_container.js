import { connect } from 'react-redux';
import userProfileEdit from './user_profile_edit';


const msp = (state, ownProps) => {
  return {
    profile: state.entities.profiles[ownProps.match.params.userId],
    pageOwner: state.entities.users.general[ownProps.match.params.userId]
  };
};

const mdp = (dispatch) => {
  return {
  };
};

export default connect(msp, mdp)(userProfileEdit);
