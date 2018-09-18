import React from 'react';
import { connect } from 'react-redux';
import { deleteNotifications } from '../../acitons/notification_actions';
import NotificationIndexItem from './notification_index_item';

const msp = (state) => {
  return {
    notifications: Object.values(state.entities.notifications),
  };
};

const NotificationIndexItem = (props) => {
  return (
    <li>{props.notification.body}</li>
  );
};


export default connect(msp)(NotificationIndexItem);
