import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from '../post/post_index_item';
import CreatePostFormContainer from '../post/create_post_form_container';
import FriendRequest from '../friend/friend_request';

class userShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ownPage: this.props.currentUser === this.props.pageOwner}
  }

componentWillMount() {
  this.props.fetchAllPosts(this.props.pageOwner, false)
}
  render() {
    const postsToRender = Object.values(this.props.posts);

    const posts = postsToRender.map((post) => {
      return <PostIndexItem post={post} key={post.id}/>;
    });
    return (
      <div>
        USER SHOW {this.props.pageOwner.username}
        <br />
        <FriendRequest currentUser={this.props.currentUser} pageOwner={this.props.pageOwner}/>
        <br />
        <h3>Post to wall</h3>
        <br />


        <CreatePostFormContainer pageOwner={this.props.pageOwner} />
        <br /><br />
          {posts}
        <br />
        <Link to={'/feed'}>Back To Feed</Link>
        <br /> <br />
        <button onClick={this.props.logout}>LOGOUT</button>
      </div>
    );
  }
}

export default userShow;
