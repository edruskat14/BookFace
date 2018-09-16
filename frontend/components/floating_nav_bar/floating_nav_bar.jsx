import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSearch from './search';

const floatingNavBar = (props) => {
  return (
    <div className='floating-nav-main'>
      <div className='floating-nav-content'>
        <div className='nav-search-with-logo'>
          <Link to='/feed'>
            <img src={window.nav_bar_fb_logo} className='nav-fb-logo'/>
          </Link>
          <div className='nav-search-bar'>
            <NavBarSearch />
          </div>
        </div>
        <nav className='nav-buttons'>
          <Link to={`/users/${props.currentUser.id}`} className='show-page-button'>{props.currentUser.username}</Link>
          <p className='separator-line'></p>
          <Link to='/feed' className='home-button'>Home</Link>
          <p className='separator-line'></p>
          <button className='find-friends-button'>Find Friends</button>
          <p className='separator-line'></p>
        </nav>
      </div>
    </div>
  );
};

export default floatingNavBar;
