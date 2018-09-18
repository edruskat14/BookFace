import React from 'react';

const NotificationIndexItem = (props) => {
  debugger
  return (
    <li className='notification-li'>
      {props.notification.message}
    </li>
  );
};


export default NotificationIndexItem;
