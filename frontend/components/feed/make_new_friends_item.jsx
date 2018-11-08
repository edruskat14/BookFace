import React from 'react';
import { Link } from 'react-router-dom'
const MakeNewFriendsItem = (props) => {
  return (
    <div className='make-new-friends-item'>
      <Link className='make-new-friends-link' to={`/users/${props.user.id}`}>
        <img src={props.user.photoUrl} className='make_new_friends_photo'/>
          <div className='make-new-friends-username'>{props.user.username}</div>
      </Link>
    </div>
  )
}

export default MakeNewFriendsItem;
