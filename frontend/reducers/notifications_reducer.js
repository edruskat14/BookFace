import { RECEIVE_NOTIFICATIONS, RECEIVE_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/notification_actions';

const notificationsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NOTIFICATIONS:
      return action.notifications;
    case RECEIVE_NOTIFICATION:
      return Object.assign({}, state, { [action.notification.id]: action.notification });
    case REMOVE_NOTIFICATION:
      const newState = Object.assign({}, state);
      delete newState[action.notification.id];
      return newState;
    default:
      return state;
  };
};

export default notificationsReducer;
