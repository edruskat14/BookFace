import React from 'react';


class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>This is your feed {this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>LOGOUT</button>
      </div>
    )
  }
}

export default Feed;
