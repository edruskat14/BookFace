import * as NotificationApiUtil from '../util/notification_api_util';

export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';
export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION';
export const REMOVE_NOTIFICATIONS = 'REMOVE_NOTIFICATION';

export const fetchNotifications = (user) => {
  return dispatch => {
    return NotificationApiUtil.fetchNotifications(user).then((notifications) => {
      return dispatch({ type: RECEIVE_NOTIFICATIONS, notifications });
    });
  };
};
export const createNotification = (notification) => {
  return dispatch => {
    return NotificationApiUtil.createNotification(notification).then((notification) => {
      return dispatch({ type: RECEIVE_NOTIFICATION, notification });
    });
  };
};
export const deleteNotifications = (user) => {
  return dispatch => {
    return NotificationApiUtil.deleteNotifications(user).then(() => {
      return dispatch({ type: REMOVE_NOTIFICATIONS });
    });
  };
};
