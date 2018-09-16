import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from '../post/post_index_item';
import CreatePostFormContainer from '../post/create_post_form_container';
import FriendRequest from '../friend/friend_request';
import FloatingNavBarContainer from '../floating_nav_bar/floating_nav_bar_container';

class userShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageOwner: this.props.pageOwner}

  }
  componentWillMount(){
    this.props.fetchAllPosts(this.props.pageOwner, false)
    this.props.fetchUser(this.props.match.params.userId)
  }

  render() {
    const postsToRender = this.props.posts.reverse();
    const posts = postsToRender.map((post) => {
      return <PostIndexItem post={post} key={post.id}/>;
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
            {this.props.pageOwner.username}
          </div>
          <div className='add-friend-user-show-button'>
            <FriendRequest currentUser={this.props.currentUser} pageOwner={this.props.pageOwner} />
          </div>
        </div>

        <main className='show-page-main'>

            <div className='show-page-post-section'>
              <CreatePostFormContainer pageOwner={this.props.pageOwner} />
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
