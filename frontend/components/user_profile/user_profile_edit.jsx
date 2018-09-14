import React from 'react';
import { Link } from 'react-router-dom';

class userProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile
  }
  render() {
    return (
      <div>
        This is {this.props.pageOwner.username}s page.

        <Link to={'/feed'}>Back To Feed</Link>
        <br /> <br />
        <button onClick={this.props.logout}>LOGOUT</button>
      </div>
    );
  }
}

export default userProfileEdit;
