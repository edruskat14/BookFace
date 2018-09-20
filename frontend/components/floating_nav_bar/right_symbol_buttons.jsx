import React from 'react';
import { connect } from 'react-redux';
import NotificationIndexItem from '../notifications/notifications_container';
import { deleteNotification } from '../../actions/notification_actions';
import FriendResponse from '../friend/friend_response';
import DownArrowComponents from './down_arrow_components';

const mdp = dispatch => {
  return {
    deleteNotification: (notif) => dispatch(deleteNotification(notif))
  };
};

const RightSymbols = (props) => {

  let notifs = null;
  let notificationBadge = null;
  if (props.notifications.length > 0) {
    notifs = props.notifications.map((notif) => {
      return <NotificationIndexItem notification={notif} key={notif.id} deleteNotification={props.deleteNotification}/>
    })
    notifs.reverse();
    notificationBadge = <p className='notifications-badge'>{notifs.length}</p>
  }

  let requests = null;
  let requestsBadge = null;
  if (props.requests.length > 0) {
    requests = props.requests.map((request) => {
    if (request.friendee_id === props.currentUser.id) {
      return <FriendResponse request={request} key={request.id}/>
      }
    });
    requestsBadge = <p className='friend-requests-badge'>{requests.length}</p>
  };
  return (
    <nav className='nav-symbols'>

        <div className='outer-nav-button-dropdown-div'>
          <button className='friend-response-button'>
            <img className='nav-friends-symbol' src={window.friends_symbol} />
            {requestsBadge}
          </button>
          <div className='friend-responses-div'>
            {requests}
          </div>
        </div>

      <img className='nav-messages-symbol' src={window.messages_symbol} />

      <div className='outer-nav-button-dropdown-div'>
        <button className='notifications-button'>
          <img className='nav-notifications-symbol' src={window.notifications_symbol} />
          {notificationBadge}
        </button>
        <div className='notifications-div'>
          {notifs}
        </div>
      </div>

      <p className='separator-line'></p>
      <img className='nav-quick-help-symbol' src={window.quick_help_symbol} />

      <DownArrowComponents />
    </nav>
  );
};

export default connect(null, mdp)(RightSymbols);
