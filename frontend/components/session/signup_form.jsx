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
    this.setState(this.props.defaultState);
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
            <option value='3'>Mar</option>
            <option value='4'>Apr</option>
            <option value='5'>May</option>
            <option value='6'>Jun</option>
            <option value='7'>Jul</option>
            <option value='8'>Aug</option>
            <option value='9'>Sep</option>
            <option value='10'>Oct</option>
            <option value='11'>Nov</option>
            <option value='12'>Dec</option>
          </select>
          <select className='signup-day'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='2'>3</option>
            <option value='2'>4</option>
            <option value='2'>5</option>
            <option value='2'>6</option>
            <option value='2'>7</option>
            <option value='2'>8</option>
            <option value='2'>9</option>
            <option value='2'>10</option>
            <option value='2'>11</option>
            <option value='2'>12</option>
            <option value='2'>13</option>
            <option value='2'>14</option>
            <option value='2'>15</option>
            <option value='2'>16</option>
            <option value='2'>17</option>
            <option value='2'>18</option>
            <option value='2'>19</option>
            <option value='2'>20</option>
            <option value='2'>21</option>
            <option value='2'>22</option>
            <option value='2'>23</option>
            <option value='2'>24</option>
            <option value='2'>25</option>
            <option value='2'>26</option>
            <option value='2'>27</option>
            <option value='2'>28</option>
            <option value='2'>29</option>
            <option value='2'>30</option>
            <option value='2'>31</option>
          </select>
          <select className='signup-year'>
            <option value='1'>1950</option>
            <option value='1'>1951</option>
            <option value='1'>1952</option>
            <option value='1'>1953</option>
            <option value='1'>1954</option>
            <option value='1'>1955</option>
            <option value='1'>1956</option>
            <option value='1'>1957</option>
            <option value='1'>1958</option>
            <option value='1'>1959</option>
            <option value='1'>1960</option>
            <option value='1'>1961</option>
            <option value='1'>1962</option>
            <option value='1'>1963</option>
            <option value='1'>1964</option>
            <option value='1'>1965</option>
            <option value='1'>1966</option>
            <option value='1'>1967</option>
            <option value='1'>1968</option>
            <option value='1'>1969</option>
            <option value='1'>1970</option>
            <option value='1'>1971</option>
            <option value='1'>1972</option>
            <option value='1'>1973</option>
            <option value='1'>1974</option>
            <option value='1'>1975</option>
            <option value='1'>1976</option>
            <option value='1'>1977</option>
            <option value='1'>1978</option>
            <option value='1'>1979</option>
            <option value='1'>1980</option>
            <option value='1'>1981</option>
            <option value='1'>1982</option>
            <option value='1'>1983</option>
            <option value='1'>1984</option>
            <option value='1'>1985</option>
            <option value='1'>1986</option>
            <option value='1'>1987</option>
            <option value='1'>1988</option>
            <option value='1'>1989</option>
            <option value='1'>1990</option>
            <option value='1'>1991</option>
            <option value='1'>1992</option>
            <option value='2'>1994</option>
            <option value='2'>1995</option>
            <option value='2'>1996</option>
            <option value='2'>1997</option>
            <option value='2'>1998</option>
            <option value='2'>1999</option>
            <option value='2'>2000</option>
            <option value='2'>2001</option>
            <option value='2'>2002</option>
            <option value='2'>2003</option>
            <option value='2'>2004</option>
            <option value='2'>2005</option>
            <option value='2'>2006</option>
            <option value='2'>2007</option>
            <option value='2'>2008</option>
            <option value='2'>2009</option>
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
