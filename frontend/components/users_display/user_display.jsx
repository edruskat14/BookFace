import React from 'react';
import UserDisplayItem from './user_display_item';
import FloatingNavBarContainer from '../floating_nav_bar/floating_nav_bar_container';

const UserDisplay = (props) => {
  let message = props.absent;
  let displays = null

  if (props.users.length > 0) {
    displays = props.users.map((user) => {
    return <UserDisplayItem user={user} />;
    });
    message = props.present;
  }

  return (
    <div className='user-display-all'>
      <FloatingNavBarContainer />
      <main className='user-display-main'>
        <h2 className='user-display-message'>{message}</h2>
        <div className='user-display-content'>
          {displays}
        </div>
      </main>
    </div>
  );
};

export default UserDisplay;
