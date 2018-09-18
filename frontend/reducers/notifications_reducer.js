import { RECEIVE_NOTIFICATIONS, RECEIVE_NOTIFICATION, REMOVE_NOTIFICATIONS } from '../actions/notification_actions';

const notificationsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NOTIFICATIONS:
      return action.notifications;
    case RECEIVE_NOTIFICATION:
      return Object.assign({}, state, { [action.notification.id]: action.notification });
    case REMOVE_NOTIFICATIONS:
      return {};
    default:
      return state;
  };
};

export default notificationsReducer;
