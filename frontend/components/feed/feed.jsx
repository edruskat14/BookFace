import { Link } from 'react-router-dom';
import React from 'react';

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
        <button onClick={this.props.logout}>LOGOUT</button>
        <Link to={`/users/${this.props.currentUser.id}`}>Your Page!</Link>
        <Link to={'/users/18'}>Test Link</Link>
      </div>
    )
  }
}

export default Feed;
