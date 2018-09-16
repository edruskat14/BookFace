import React from 'react';

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

    this.setState({text: ''})
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
