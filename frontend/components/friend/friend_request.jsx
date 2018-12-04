import { connect } from 'react-redux';
import { makeFriendRequest, removeFriend } from '../../actions/friendship_actions';
import React from 'react';

const msp = (state, ownProps) => {
  return {
    pending: Object.values(state.entities.friendships.pending),
    approved: Object.values(state.entities.friendships.approved)
  };
};

const mdp = (dispatch) => {
  return {
    makeFriendRequest: (request) => dispatch(makeFriendRequest(request)),
    removeFriend: (ship) => dispatch(removeFriend(ship))
  };
};

const FriendRequest = (props) => {
  const pend = props.pending.some((req) => {
    return ((props.currentUser.id === req.friender_id || props.currentUser.id === req.friendee_id) && (props.pageOwner.id === req.friender_id || props.pageOwner.id === req.friendee_id));
  });
  let approv;
  if (pend === false) {
    for(let i = 0; i < props.approved.length; i++) {
      if (props.approved[i].friender_id === props.currentUser.id && props.approved[i].friendee_id === props.pageOwner.id) {
        approv = props.approved[i];
        break;
      } else if (props.approved[i].friendee_id === props.currentUser.id && props.approved[i].friender_id === props.pageOwner.id) {
        approv = props.approved[i];
        break;
      } else {
        approv = false;
      }
    }
  }
    let buttonText;
    let buttonFunc;
    
  if (pend) {
    buttonText = 'Request pending...';
  } else if (approv) {
    buttonText = 'Remove Friend';
    buttonFunc = () => props.removeFriend(approv);
  } else {
    buttonText = 'Add Friend';
    buttonFunc = () => props.makeFriendRequest({friender_id: props.currentUser.id, friendee_id: props.pageOwner.id})
  }

  debugger
  return (
    <div className='friend-button-div'>
      <button className='add-friend-button' onClick={buttonFunc}>{buttonText}</button>
    </div>
  )
}

export default connect(msp, mdp)(FriendRequest);
