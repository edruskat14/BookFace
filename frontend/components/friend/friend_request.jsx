import { connect } from 'react-redux';
import { makeFriendRequest, removeFriend } from '../../actions/friendship_actions';
import React from 'react';

const msp = (state, ownProps) => {
  return {
    pending: Object.values(state.entities.friendships.pending),
    friends: state.entities.users.friends[ownProps.pageOwner]
  };
};

const mdp = (dispatch) => {
  return {
    makeFriendRequest: (request) => dispatch(makeFriendRequest(request)),
    removeFriend: (userA, userB) => dispatch(removeFriend(userA, userB))
  };
};

const FriendRequest = (props) => {
  const pend = props.pending.some((req) => {
    return ((props.currentUser.id === req.friender_id || props.currentUser.id === req.friendee_id) && (props.pageOwner.id === req.friender_id || props.pageOwner.id === req.friendee_id));
  });
    let buttonText;
    pend ? buttonText = 'Request pending...' : buttonText = 'AddFriend'

  return (
    <div className='friend-button-div'>
      <button className='add-friend-button' onClick={() => props.makeFriendRequest({friender_id: props.currentUser.id, friendee_id: props.pageOwner.id})}>{buttonText}</button>
    </div>
  )
}

export default connect(msp, mdp)(FriendRequest);
