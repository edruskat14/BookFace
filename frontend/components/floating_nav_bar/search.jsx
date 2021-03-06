import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emptyState = this.emptyState.bind(this);
  }

  emptyState() {
    this.setState({ text: '' });
  }
  handleChange(e) {
    this.setState({text: e.target.value}, () => {
      this.props.searchUsers(this.state.text)
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text === '') {
      return;
    } else {
      this.props.searchUsers(this.state.text).then(() => this.props.history.push('/search_results'));
      this.setState({ text: '' })
    }
  }

  render() {
    let dropdown = this.props.results.map((res) => {
      return <Link onClick={this.emptyState} className='search-dropdown-link' to={`/users/${res.id}`} key={res.id}><li className='search-dropdown-single'><img className='search-dropdown-pic' src={res.photoUrl} />
      {res.username}</li></Link>
    })
    if (this.state.text === '' || this.props.match.url === '/search_results') {
      dropdown = null;
    }
    return (
      <div className='nav-search'>
        <form onSubmit={this.handleSubmit} className='search-bar-form'>
          <input onChange={this.handleChange} className='nav-search-text' type='text' value={this.state.text} placeholder='Search'/>
          <div className='search-dropdown'>
            <ul className='search-dropdown-list'>
              {dropdown}
            </ul>
          </div>
          <input type='submit' className='nav-search-button' value='GO!' />
        </form>
      </div>
    );
  }
}

export default withRouter(NavBarSearch);
