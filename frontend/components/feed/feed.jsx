import { Link } from 'react-router-dom';
import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  // componentDidMount() {
  //   this.props.fetchUsers();
  //   this.props.fetchProfiles();
  // }

  render() {
    return (
      <div>
        <h1>This is your feed {this.props.currentUser.username}</h1>

        <h3>Post 2 own wall</h3><br />
        <CreatePostFormContainer pageOwner={this.props.currentUser}/>
        <br /><br />
        <button onClick={this.props.logout}>LOGOUT</button>
        <Link to={`/users/${this.props.currentUser.id}`}>Your Page!</Link>
        <Link to={'/users/18'}>Test Link</Link>
      </div>
    )
  }
}

export default Feed;
