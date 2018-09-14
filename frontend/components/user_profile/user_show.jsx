import React from 'react';
import { Link } from 'react-router-dom';

class userShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ownPage: this.props.currentUser === this.props.pageOwner}
  }
  render() {
    return (
      <div>
        USER SHOW {this.props.pageOwner.username}
        <br /><br />
        <Link to={'/feed'}>Back To Feed</Link>
        <br /> <br />
        <button onClick={this.props.logout}>LOGOUT</button>
      </div>
    );
  }
}

export default userShow;
