import React from 'react';
import { connect } from 'react-redux';
import UserDisplay from '../../users_display/user_display_item';

const msp = (state) => {
  return {
    friendships: Object.values(state.entities.friendships.approved),
    users: state.entities.users.general
  }
}

const Friends = (props) => {
  let ships = [];
  ships = props.friendships.map((ship) => {
    if (ship.friender_id === props.pageOwner.id) {
      return <UserDisplay onClick={props.setTimeline} user={props.users[ship.friendee_id]} key={ship.friendee_id}/>
    } else if (ship.friendee_id === props.pageOwner.id) {
      return <UserDisplay user={props.users[ship.friender_id]} key={ship.friender_id}/>
    }
  })
  return (
    <div onClick={props.setTimeline} className='show-page-post-section'>
      {ships}
    </div>
  )
}

export default connect(msp)(Friends);
