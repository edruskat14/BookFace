import { Link } from 'react-router-dom';
import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';
import FloatingNavBarContainer from '../floating_nav_bar/floating_nav_bar_container';
import PostIndexItem from '../post/post_index_item';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchFriends(this.props.currentUser);
    this.props.fetchAllPosts(this.props.currentUser, true)
  }
  //   this.props.fetchProfiles();

  render() {
    const postsToRender = this.props.posts.reverse();
    const posts = postsToRender.map((post) => {
      return <PostIndexItem post={post} key={post.id}/>;
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
          <h3>Post 2 own wall</h3><br />
          <br />
          <button onClick={this.props.logout}>LOGOUT</button>
          <br />
          <Link to={'/users/18'}>Test</Link>
          <br />
          <Link to={'/users/19'}>Test1</Link>
          <br />
          <Link to={'/users/20'}>Test2</Link>
          <br />
          <Link to={'/users/21'}>Test3</Link>
        </div>
      </div>
    )
  }
}

export default Feed;
