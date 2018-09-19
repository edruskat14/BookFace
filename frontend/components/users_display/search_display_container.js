import UserDisplay from './user_display';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    users: Object.values(state.entities.searchResults),
    present: 'Search results',
    absent: 'No users matched your search'
  };
};

export default connect(msp)(UserDisplay);
