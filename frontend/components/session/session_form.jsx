import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.setState(this.props.defaultState)
  }

  render() {
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange('username')} value={this.state.username}/>
          <input type='password' onChange={this.handleChange('password')} value={this.state.password}/>
          <input type='submit' value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
