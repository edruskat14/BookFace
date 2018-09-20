import { Link } from 'react-router-dom';
import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';
import FloatingNavBarContainer from '../floating_nav_bar/floating_nav_bar_container';
import PostIndexItemContainer from '../post/post_index_item_container';
import FriendResponse from '../friend/friend_response';

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
            <Link to={'/users/18'}>Test</Link>
            <br />
            <Link to={'/users/19'}>Test1</Link>
            <br />
            <Link to={'/users/20'}>Test2</Link>
            <br />
            <Link to={'/users/21'}>Test3</Link>
            <button onClick={this.props.logout}>LOGOUT</button>
            <br />
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
