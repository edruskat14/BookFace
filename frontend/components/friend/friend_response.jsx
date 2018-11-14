import { connect } from 'react-redux';
import { approveFriendRequest, removeFriend } from '../../actions/friendship_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    friender: state.entities.users.general[ownProps.request.friender_id]
  };
};
const mdp = dispatch => {
  return {
    approve: (friendship) => dispatch(approveFriendRequest(friendship)),
    decline: (friendship) => dispatch(removeFriend(friendship))
  }
}

const FriendResponse = (props) => {
  const friender = props.friender || {username: ''}
  return (
    <li className='friend-response-li'>
      <div className='single-friend-response'>
        <Link to={`/users/${friender.id}`} className='friend-response-link'>
          <p className='friend-requestor-name'>{friender.username}</p>
        </Link>
        <div    className='friend-response-approve-decline-div'>
          <button className='approve-friend-request' onClick={() => props.approve(props.request)}>Confirm</button>
          <button className='decline-friend-request' onClick={() => props.decline(props.request)}>Delete Request</button>
        </div>
      </div>
    </li>
  );
};

export default connect(msp, mdp)(FriendResponse);
