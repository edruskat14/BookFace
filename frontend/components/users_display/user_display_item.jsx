import React from 'react';
import { Link } from 'react-router-dom';

const UserDisplayItem = (props) => {
  return (
    <Link className='user-search-link' to={`/users/${props.user.id}`}>
      <div className='single-user-search-item'>
        <div className='user-display-username'>{props.user.username}</div>
        <br />
        <img src={props.user.photoUrl} className='user-search-photo'/>
      </div>
    </Link>
  );
};

export default UserDisplayItem;
