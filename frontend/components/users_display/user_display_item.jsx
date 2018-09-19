import React from 'react';
import { Link } from 'react-router-dom';

const UserDisplayItem = (props) => {
  return (
    <Link className='user-search-link' to={`/users/${props.user.id}`}>
      <div className='single-user-search-item'>
        {props.user.username}
      </div>
    </Link>
  );
};

export default UserDisplayItem;
