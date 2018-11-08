import MakeNewFriendsItem from './make_new_friends_item';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    users: Object.values(state.entities.users.general),
    Friendships: Object.values(state.entities.friendships.pending) + Object.values(state.entities.friendships.approved)
  };
};

export default connect(msp)(MakeNewFriendsItem);
