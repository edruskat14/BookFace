import React from 'react';
import Timeline from './user_show_options/timeline.jsx';
import Friends from './user_show_options/friends.jsx';
import About from './user_show_options/about.jsx';
import EditAbout from './user_show_options/edit_about';

const UserShowMain = (props) => {
  let main = null;
  if (props.status === 'Timeline') {
    main = <Timeline all={props.all} pageOwner={props.pageOwner}/>
  } else if (props.status === 'Friends') {
    main = <Friends all={props.all} pageOwner={props.pageOwner} />
  } else if (props.status === 'About') {
    main = <About all={props.all} />
  } else if (props.status === 'EditAbout') {
    main = <EditAbout all={props.all} />
  }
  return (
    main
  )

}

export default UserShowMain;
