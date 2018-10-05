import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItemContainer from '../post/post_index_item_container';
import CreatePostFormContainer from '../post/create_post_form_container';
import FriendRequest from '../friend/friend_request';
import FloatingNavBarContainer from '../floating_nav_bar/floating_nav_bar_container';
import ProPicFormContainer from '../profile_picture/pro_pic_form_container';

class userShow extends React.Component {
  constructor(props) {

    super(props);
    this.state = { pageOwner: this.props.pageOwner }

  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchAllPosts(nextProps.match.params.userId, false);
      this.props.fetchFriends(nextProps.match.params.userId)
      this.props.fetchUsers();
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
    this.props.fetchFriends(this.props.match.params.userId);
  }

  render() {
    let pageOwner = { username: '' };
    if (this.props.pageOwner) {
      pageOwner = this.props.pageOwner;
    }
    const currentUser = this.props.currentUser || { username: '' };

    let requestButton = null
    if (!this.props.friendsWith) {
      requestButton = <FriendRequest currentUser={currentUser} pageOwner={pageOwner} />
    }
    let proPicButton = null
    if (pageOwner === currentUser) {
      proPicButton = <button onClick={this.props.turnOnModal} className='pro-pic-edit-button'><img className='pro-pic-camera' src={window.camera_icon} /><p className='update-profile-picture'>Update Profile Picture</p>
      </button>
      requestButton = null
     }
    let posts = null;
    let postForm = null;
    const postsToRender = this.props.posts;
    postsToRender.sort(function(a, b){ return new Date(b.created_at) - new Date(a.created_at) });
    if (this.props.friendsWith || this.props.pageOwner === this.props.currentUser) {
      posts = postsToRender.map((post) => {
        return <PostIndexItemContainer post={post} key={post.id}/>;
      });
      postForm = <CreatePostFormContainer pageOwner={pageOwner} />;
    }
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

              <div className='show-page-post-section'>
                {postForm}
                <br /><br />
                {posts}
              </div>
              <div className='show-page-left'>
                <div className='balloons-div'>
                  <img src={window.birthday_balloons} className='birthday-balloons' />
                  <p className='happy-birthday'>Happy Birthday!</p>
                </div>
                <div>
                  <p className='birthday-if-statement'>(if it's your birthday)</p>
                </div>
              </div>
          </main>
        </div>
    );
  }
}

export default userShow;
// <button className='all-below-cover-buttons timeline-button'>Timeline</button>
// <button className='all-below-cover-buttons'>About</button>
// <button className='all-below-cover-buttons'>Friends</button>
// <button className='all-below-cover-buttons'>Photos</button>
// <button className='all-below-cover-buttons'>More</button>
