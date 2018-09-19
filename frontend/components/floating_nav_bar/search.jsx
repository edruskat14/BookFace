import React from 'react';
import { Redirect } from 'react-router-dom';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text === '') {
      return;
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({text: ''});
      <Redirect to={'/search_results'} />
    }
  }

  render() {
    return (
      <div className='nav-search'>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} className='nav-search-text' type='text' value={this.state.text} placeholder='Search'/>
          <input type='submit' onClick={this.handleSubmit} className='nav-search-button' value='O' />
        </form>
      </div>
    );
  }
}

export default NavBarSearch;
