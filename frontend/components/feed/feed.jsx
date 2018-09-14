import { Link } from 'react-router-dom';
import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchFriends(this.props.currentUser);
  }
  //   this.props.fetchProfiles();

  render() {
    return (
      <div>
        <h1>This is your feed {this.props.currentUser.username}</h1>

        <h3>Post 2 own wall</h3><br />
        <CreatePostFormContainer pageOwner={this.props.currentUser}/>
        <br /><br />
        <button onClick={this.props.logout}>LOGOUT</button>
        <Link to={`/users/${this.props.currentUser.id}`}>Your Page!</Link>
        <br />
        <Link to={'/users/18'}>Test</Link>
        <br />
        <Link to={'/users/19'}>Test1</Link>
        <br />
        <Link to={'/users/20'}>Test2</Link>
        <br />
        <Link to={'/users/21'}>Test3</Link>
      </div>
    )
  }
}

export default Feed;
