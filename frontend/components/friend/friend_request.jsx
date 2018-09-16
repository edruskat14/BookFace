import { connect } from 'react-redux';
import { makeFriendRequest } from '../../actions/friend_actions';
import React from 'react';

const FriendRequest = (props) => {
  return (
    <div>
      <button className='add-friend-button' onClick={() => props.makeFriendRequest({friender_id: props.currentUser.id, friendee_id: props.pageOwner.id})}>Add Friend</button>
    </div>
  )
}
const mdp = (dispatch) => {
  return {
    makeFriendRequest: (request) => dispatch(makeFriendRequest(request))
  };
};

export default connect(null, mdp)(FriendRequest);
