import React from 'react';
import Timeline from './user_show_options/timeline.jsx';
import Friends from './user_show_options/friends.jsx';

const UserShowMain = (props) => {
  let main = null;
  if (props.status === 'Timeline') {
    main = <Timeline all={props.all} pageOwner={props.pageOwner}/>
  } else if (props.status === 'Friends') {
    main = <Friends all={props.all} pageOwner={props.pageOwner} />
  }
  return (
    main
  )

}

export default UserShowMain;
