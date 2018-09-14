import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from '../post/post_index_item';

class userShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ownPage: this.props.currentUser === this.props.pageOwner}
  }

componentWillMount() {
  this.props.fetchAllPosts(this.props.pageOwner)
}
  render() {
    const postsToRender = Object.values(this.props.posts);

    const posts = postsToRender.map((post) => {
      return <PostIndexItem post={post} />;
    });

    return (
      <div>
        USER SHOW {this.props.pageOwner.username}
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
