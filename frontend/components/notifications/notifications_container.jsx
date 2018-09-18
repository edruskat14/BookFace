import React from 'react';
import { connect } from 'react-redux';

const NotificationIndexItem = (props) => {
  return (
    <li className='notification-li'>
      <button className='single-notification' onClick={() => props.deleteNotification(props.notification)}>
        {props.notification.message}
      </button>
    </li>
  );
};

export default NotificationIndexItem;
