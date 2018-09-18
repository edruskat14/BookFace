import React from 'react';
import NotificationIndexItem from '../notifications/notifications_container';

const RightSymbols = (props) => {
  debugger
  let notifs = null;
  let badge = null;
  if (props.notifications.length > 0) {
    debugger
    notifs = props.notifications.map((notif) => {
      return <NotificationIndexItem notification={notif} key={notif.id}/>
    })
    notifs.reverse();
    badge = <p className='notifications-badge'>{notifs.length}</p>
  }
  debugger
  return (
    <nav className='nav-symbols'>
      <img className='nav-friends-symbol' src={window.friends_symbol} />
      <img className='nav-messages-symbol' src={window.messages_symbol} />
      <button className='notifications-button'>
        <img className='nav-notifications-symbol' src={window.notifications_symbol} />
      </button>
      <div className='notifications-div'>
          {notifs}
      </div>
      <p className='separator-line'></p>
      <img className='nav-quick-help-symbol' src={window.quick_help_symbol} />
      <img className='nav-downward-arrow-symbol' src={window.downward_arrow_symbol} />
      {badge}
    </nav>
  );
};

export default RightSymbols;
