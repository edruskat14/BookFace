import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSearchContainer from './search_container';
import RightSymbols from './right_symbol_buttons';

const floatingNavBar = (props) => {
  return (
    <div className='floating-nav-main'>
      <div className='nav-search-with-logo'>
        <Link to='/feed'>
          <img src={window.nav_bar_fb_logo} className='nav-fb-logo'/>
        </Link>
        <div className='nav-search-bar'>
          <NavBarSearchContainer />
        </div>
      </div>
      <div className='nav-all-clickables'>
        <nav className='nav-buttons'>
          <Link to={`/users/${props.currentUser.id}`} className='show-page-button'>{props.currentUser.username}</Link>
          <p className='separator-line'></p>
          <Link to='/feed' className='home-button'>Home</Link>
          <p className='separator-line'></p>
          <button className='find-friends-button'>Find Friends</button>
          <p className='separator-line'></p>
        </nav>
        <RightSymbols requests={props.requests} notifications={props.notifications} currentUser={props.currentUser} deleteNotification={props.deleteNotification}/>
      </div>
    </div>
  );
};

export default floatingNavBar;
