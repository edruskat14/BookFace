import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleChange = this.hangleChange.bind(this;)
  }

  handleChange(field) {
    return e => {
      this.setState([field]: e.target.value)
    };
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={this.handleChange(username)} value={this.state.username}/>
          <input type='text' onChange={this.handleChange(password)} value={this.state.password}/>
        </form>
      </div>
    );
  }
}
