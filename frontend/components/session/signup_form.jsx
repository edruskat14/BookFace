import React from 'react';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value})
    };
  }

  handleGender(e) {
    this.setState({'gender': e.target.value})
  }

  handleBirthday(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
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
          <select value={this.state.month} onChange={this.handleBirthday('month')} className='signup-month'>
            <option value='' devaultvalue='true' disabled>Month</option>
            <option value='Jan'>Jan</option>
            <option value='Feb'>Feb</option>
            <option value='Mar'>Mar</option>
            <option value='Apr'>Apr</option>
            <option value='May'>May</option>
            <option value='Jun'>Jun</option>
            <option value='Jul'>Jul</option>
            <option value='Aug'>Aug</option>
            <option value='Sep'>Sep</option>
            <option value='Oct'>Oct</option>
            <option value='Nov'>Nov</option>
            <option value='Dec'>Dec</option>
          </select>
          <select value={this.state.day} onChange={this.handleBirthday('day')} className='signup-day'>
            <option value='' devaultvalue='true' disabled>Day</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
            <option value='21'>21</option>
            <option value='22'>22</option>
            <option value='23'>23</option>
            <option value='24'>24</option>
            <option value='25'>25</option>
            <option value='26'>26</option>
            <option value='27'>27</option>
            <option value='28'>28</option>
            <option value='29'>29</option>
            <option value='30'>30</option>
            <option value='31'>31</option>
          </select>
          <select value={this.state.year} onChange={this.handleBirthday('year')} className='signup-year'>
            <option value='' devaultvalue='true' disabled >Year</option>
            <option value='1930'>1930</option>
            <option value='1931'>1931</option>
            <option value='1932'>1932</option>
            <option value='1933'>1933</option>
            <option value='1934'>1934</option>
            <option value='1935'>1935</option>
            <option value='1936'>1936</option>
            <option value='1937'>1937</option>
            <option value='1938'>1938</option>
            <option value='1939'>1939</option>
            <option value='1940'>1940</option>
            <option value='1941'>1941</option>
            <option value='1942'>1942</option>
            <option value='1943'>1943</option>
            <option value='1944'>1944</option>
            <option value='1945'>1945</option>
            <option value='1946'>1946</option>
            <option value='1947'>1947</option>
            <option value='1948'>1948</option>
            <option value='1949'>1949</option>
            <option value='1950'>1950</option>
            <option value='1951'>1951</option>
            <option value='1952'>1952</option>
            <option value='1953'>1953</option>
            <option value='1954'>1954</option>
            <option value='1955'>1955</option>
            <option value='1956'>1956</option>
            <option value='1957'>1957</option>
            <option value='1958'>1958</option>
            <option value='1959'>1959</option>
            <option value='1960'>1960</option>
            <option value='1961'>1961</option>
            <option value='1962'>1962</option>
            <option value='1963'>1963</option>
            <option value='1964'>1964</option>
            <option value='1965'>1965</option>
            <option value='1966'>1966</option>
            <option value='1967'>1967</option>
            <option value='1968'>1968</option>
            <option value='1969'>1969</option>
            <option value='1970'>1970</option>
            <option value='1971'>1971</option>
            <option value='1972'>1972</option>
            <option value='1973'>1973</option>
            <option value='1974'>1974</option>
            <option value='1975'>1975</option>
            <option value='1976'>1976</option>
            <option value='1977'>1977</option>
            <option value='1978'>1978</option>
            <option value='1979'>1979</option>
            <option value='1980'>1980</option>
            <option value='1981'>1981</option>
            <option value='1982'>1982</option>
            <option value='1983'>1983</option>
            <option value='1984'>1984</option>
            <option value='1985'>1985</option>
            <option value='1986'>1986</option>
            <option value='1987'>1987</option>
            <option value='1988'>1988</option>
            <option value='1989'>1989</option>
            <option value='1990'>1990</option>
            <option value='1991'>1991</option>
            <option value='1992'>1992</option>
            <option value='1993'>1993</option>
            <option value='1994'>1994</option>
            <option value='1995'>1995</option>
            <option value='1996'>1996</option>
            <option value='1997'>1997</option>
            <option value='1998'>1998</option>
            <option value='1999'>1999</option>
            <option value='2000'>2000</option>
            <option value='2001'>2001</option>
            <option value='2002'>2002</option>
            <option value='2003'>2003</option>
            <option value='2004'>2004</option>
            <option value='2005'>2005</option>
            <option value='2006'>2006</option>
            <option value='2007'>2007</option>
            <option value='2008'>2008</option>
            <option value='2009'>2009</option>
          </select>
          <br />
          <label className='signup-radio'>
            <input type="radio" className='signup-radio-button' onChange={this.handleGender} name="gender" value="female" />
            Female
          </label>
          <label className='signup-radio'>
            <input type="radio" className='signup-radio-button' onChange={this.handleGender} name="gender" value="male" />
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
