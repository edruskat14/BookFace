import UserDisplay from './user_display';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    friendships: Object.values(state.entities.friendships.approved),
    present: 'Friends',
    absent: 'No Friends'
  };
};

export default connect(msp)(UserDisplay);
