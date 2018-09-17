import { connect } from 'react-redux';
import { approveFriendRequest, removeFriend } from '../../actions/friend_actions';
import React from 'react';

const mdp = dispatch => {
  return {
    approve: (friendship) => dispatch(approveFriendRequest(friendship)),
    decline: (friendship) => dispatch(removeFriend(friendship))
  }
}

const FriendResponse = (props) => {
  return (
    <div className='friend-response'>
      <button className='approveFriendRequest' onClick={() => props.approve(props.friendship)}>Confirm</button>
      <button className='decline-friend-request' onClick={() => props.decline(props.friendship)}>Delete Request</button>
    </div>
  );
};

export default connect(null, mdp)(FriendResponse);
