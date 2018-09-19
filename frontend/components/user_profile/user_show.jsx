import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItemContainer from '../post/post_index_item_container';
import CreatePostFormContainer from '../post/create_post_form_container';
import FriendRequest from '../friend/friend_request';
import FloatingNavBarContainer from '../floating_nav_bar/floating_nav_bar_container';

class userShow extends React.Component {
  constructor(props) {

    super(props);
    this.state = { pageOwner: this.props.pageOwner }

  }
  componentWillMount() {

  }
  componentDidMount(){

    this.props.fetchUsers();
    this.props.fetchAllPosts(this.props.match.params.userId, false);
    this.props.fetchNotifications(this.props.currentUser);
    this.props.fetchFriendRequests(this.props.currentUser);
    this.props.fetchFriends(this.props.currentUser);
  }

  render() {
    const pageOwner = this.props.pageOwner || { username: '' };
    const currentUser = this.props.currentUser || { username: '' };

    let requestButton = null
    if (!this.props.friendsWith) {
      requestButton = <FriendRequest currentUser={currentUser} pageOwner={pageOwner} />
    };
    if (pageOwner === currentUser) { requestButton = null }
    const postsToRender = this.props.posts;

    postsToRender.sort(function(a, b){ return new Date(b.created_at) - new Date(a.created_at) });
    const posts = postsToRender.map((post) => {
      return <PostIndexItemContainer post={post} key={post.id}/>;
    });
    return (
      <div className='user-show-all-content'>
        <nav>
          <FloatingNavBarContainer />
        </nav>
        <div className='show-page-topper'>
          <div className='cover-photo-container'>
            <img src={window.beatles} className='cover-photo'/>
          </div>
          <div className='profile-picture-container'>
            <img src={window.bookface_jim} className='profile-picture'/>
          </div>
          <div className='username-f-and-c'>
            {pageOwner.username}
          </div>
          {requestButton}
          <nav className='below-cover-nav '>
            <button className='all-below-cover-buttons timeline-button'>Timeline</button>
            <button className='all-below-cover-buttons'>About</button>
            <button className='all-below-cover-buttons'>Friends</button>
            <button className='all-below-cover-buttons'>Photos</button>
            <button className='all-below-cover-buttons'>More</button>
          </nav>
        </div>

        <main className='show-page-main'>

            <div className='show-page-post-section'>
              <CreatePostFormContainer pageOwner={pageOwner} />
              <br /><br />
              {posts}
            </div>
            <br />
            <button onClick={this.props.logout}>LOGOUT</button>
        </main>
      </div>
    );
  }
}

export default userShow;
