import { Link } from 'react-router-dom';
import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';
import FloatingNavBarContainer from '../floating_nav_bar/floating_nav_bar_container';
import PostIndexItemContainer from '../post/post_index_item_container';
import FriendResponse from '../friend/friend_response';
import ProPicFormContainer from '../profile_picture/pro_pic_form_container';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchFriendRequests(this.props.currentUser);
    this.props.fetchUsers();
    this.props.fetchFriends(this.props.currentUser);
    this.props.fetchAllPosts(this.props.currentUser.id, true);
    this.props.fetchNotifications(this.props.currentUser);
    // this.props.fetchAllComments(this.props.posts);

  }
  //   this.props.fetchProfiles();

  render() {
    const postsToRender = this.props.posts;

    postsToRender.sort(function(a, b){ return new Date(b.created_at) - new Date(a.created_at) });
    const posts = postsToRender.map((post) => {
      return <PostIndexItemContainer post={post} key={post.id}/>;
    });
    const requests = this.props.pendingRequests.map((request) => {
      if (request.friendee_id === this.props.currentUser.id) {
        return <FriendResponse friendship={request} key={request.id}/>
      }
    });
    return (
      <div className='feed-all-content'>
        <div className='feed-main'>
          <FloatingNavBarContainer />
          <div className='feed-posts'>
            <CreatePostFormContainer pageOwner={this.props.currentUser}/>
            <br /><br />
            {posts}
          </div>
          <div className='feed-left'>
            
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    )
  }
}

export default Feed;
