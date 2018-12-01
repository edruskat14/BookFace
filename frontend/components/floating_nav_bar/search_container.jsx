import NavBarSearch from './search';
import { connect } from 'react-redux';
import { searchUsers } from '../../actions/search_actions';

const msp = (state) => {
  return {
    results: state.entities.searchResults
  }
}
const mdp = (dispatch) => {
  return {
    searchUsers: (string) => dispatch(searchUsers(string))
  };
};

export default connect(msp, mdp)(NavBarSearch);
