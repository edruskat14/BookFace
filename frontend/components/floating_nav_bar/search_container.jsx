import NavBarSearch from './search';
import { connect } from 'react-redux';
import { searchUsers } from '../../actions/search_actions';

const mdp = (dispatch) => {
  return {
    searchUsers: (string) => dispatch(searchUsers(string))
  };
};

export default connect(null, mdp)(NavBarSearch);
