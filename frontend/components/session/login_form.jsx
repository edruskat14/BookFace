import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
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
    this.props.login(this.state);
    this.setState(this.props.defaultState)
  }

  render() {
    return (
      <div className='login-table'>
        <div className='login-labels'>
          <p className='login-label-un'>Username</p>
          <p className='login-label-pw'>Password</p>
        </div>
        <form className='login-form' onSubmit={this.handleSubmit}>
            <input type='text' className='login-form-ele' onChange={this.handleChange('username')} value={this.state.username}/>
            <input type='password' className='login-form-ele' onChange={this.handleChange('password')} value={this.state.password}/>
          <input className='login-submit' type='submit' value='Log In'/>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
