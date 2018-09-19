import UserDisplay from './user_display';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    // users: Object.values(state.entities.searchResults),
    present: 'Friends',
    absent: 'No Friends'
  };
};

export default connect(msp)(UserDisplay);
