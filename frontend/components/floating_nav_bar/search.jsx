import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
      return <li key={res.id} className='search-dropdown-single'>
      {res.username}</li>
    })
    if (this.state.text === '' || this.props.match.url === '/search_results') {
      dropdown = null;
    }

    console.log("-----------")
    console.log(this.props.results)
    console.log("-----------")
    return (
      <div className='nav-search'>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} className='nav-search-text' type='text' value={this.state.text} placeholder='Search'/>
          <input type='submit' className='nav-search-button' value='GO!' />
        </form>
        <div className='search-dropdown'>
          <ul className='search-dropdown-list'>
            {dropdown}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBarSearch);
