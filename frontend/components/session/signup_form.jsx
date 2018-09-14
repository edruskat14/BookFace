import React from 'react';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
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
    this.props.signup(this.state);
    this.setState(this.props.defaultState)
  }

  render() {
    return (
      <div>
        <h2 className='sign-up-header'>Sign Up</h2>
        <p className='para-gratis'>It's gratis and always will be.</p>
        <form onSubmit={this.handleSubmit} className='signup-form'>
          <input type='text' className='signup-form-ele-first-name' onChange={this.handleChange('firstname')} value={this.state.firstname} placeholder="First name"/>
          <input type='text' className='signup-form-ele-last-name' onChange={this.handleChange('lastname')} value={this.state.lastname} placeholder="Last name"/>
          <br />
          <input type='text' className='signup-form-ele' onChange={this.handleChange('username')} value={this.state.username} placeholder="Username"/>
          <br />
          <input type='password' className='signup-form-ele' onChange={this.handleChange('password')} value={this.state.password} placeholder="New password"/>
          <br />
          <h4 className='birthday-title'>Birthday</h4>
          <br />
          <select className='signup-month'>
            <option value='1'>Jan</option>
            <option value='2'>Feb</option>
          </select>
          <select className='signup-day'>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
          <select className='signup-year'>
            <option value='1'>1993</option>
            <option value='2'>1994</option>
          </select>
          <br />
          <label className='signup-radio'>
            <input type="radio" className='signup-radio-button' name="gender" value="female" />
            Female
          </label>
          <label className='signup-radio'>
            <input type="radio" className='signup-radio-button' name="gender" value="male" />
            Male
          </label>
            <br />
          <input type='submit' className='signup-submit' value='Sign Up'/>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
