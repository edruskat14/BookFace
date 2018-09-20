import { connect } from 'react-redux';
import NineFriends from './nine_friends';


const msp = (state, ownProps) => {
  return {
    friends: Object.values(state.entities.friends).slice(0, 8),
    pageOwner: state.entities.users.general[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
  };
};

export default connect(msp)(NineFriends);
