import React from 'react';
import { Link } from 'react-router-dom';

import FriendRequest from '../friend/friend_request';
import FloatingNavBarContainer from '../floating_nav_bar/floating_nav_bar_container';
import ProPicFormContainer from '../profile_picture/pro_pic_form_container';
import UserShowMain from './user_show_main_section';

class userShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'Timeline' }
    this.handleState = this.handleState.bind(this);
    this.setTimeline = this.setTimeline.bind(this);
  }
  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchAllPosts(nextProps.match.params.userId, false);
      this.props.fetchUsers();
      this.props.fetchFriends(nextProps.match.params.userId);
      this.props.fetchFriendships(nextProps.match.params.userId);
      this.props.fetchProfile(nextProps.match.params.userId);
    }
  }
  componentDidUpdate() {

  }

  componentDidMount(){
    this.props.fetchFriendships(this.props.match.params.userId);
    this.props.fetchUsers();
    this.props.fetchAllPosts(this.props.match.params.userId, false);
    this.props.fetchNotifications(this.props.currentUser);
    this.props.fetchFriendships(this.props.currentUser.id);
    this.props.fetchProfile(this.props.match.params.userId);
    this.props.fetchFriends(this.props.match.params.userId);
  }

  handleState(event) {
    this.setState({ status: event.currentTarget.value})
  }
  setTimeline() {
    this.setState({ status: 'Timeline' });
  }

  render() {
    let pageOwner = this.props.pageOwner || { username: '' };

    const currentUser = this.props.currentUser || { username: '' };

    let requestButton = <FriendRequest currentUser={currentUser} pageOwner={pageOwner} />

    let proPicButton = null

    if (pageOwner === currentUser) {
      proPicButton = <button onClick={this.props.turnOnModal} className='pro-pic-edit-button'><img className='pro-pic-camera' src={window.camera_icon} /><p className='update-profile-picture'>Update Profile Picture</p>
      </button>
      requestButton = null
     }
     if (pageOwner.username === '') { requestButton = null}

    return (
        <div className='user-show-all-content'>
          <nav>
            <FloatingNavBarContainer />
          </nav>
          <div className={`modal-${this.props.modal}`}>
            <ProPicFormContainer />
            <button onClick={this.props.turnOffModal} className={`modal-${this.props.modal}-button`}>
            </button>
          </div>

          <div className='show-page-topper'>
            <div className='cover-photo-container'>
              <img src={window.beatles} className='cover-photo'/>

              <nav className='below-cover-nav '>
                <button className='all-below-cover-buttons timeline-button' value='Timeline' onClick={this.handleState} >Timeline</button>
                <button className='all-below-cover-buttons' value='Friends' onClick={this.handleState} >Friends</button>
                <button className='all-below-cover-buttons' value='About' onClick={this.handleState} >About</button>
              </nav>
            </div>
            <div className='profile-picture-container'>
              <img src={pageOwner.photoUrl} className='profile-picture'/>
            {proPicButton}
            </div>
            <div className='username-f-and-c'>
              {pageOwner.username}
            </div>
            {requestButton}

          </div>

          <main className='show-page-main'>
            <UserShowMain all={this.props} handleState={this.handleState} setTimeline={this.setTimeline} pageOwner={pageOwner} status={this.state.status}/>
          </main>
        </div>
    );
  }
}

export default userShow;

// <button className='all-below-cover-buttons'>Photos</button>
// <button className='all-below-cover-buttons'>More</button>
