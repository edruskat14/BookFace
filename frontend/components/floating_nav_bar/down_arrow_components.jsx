import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

const DownArrowComponents = (props) => {
  return (
    <div className='down-arrow-div'>
      <button className='down-arrow-button'>
        <img className='nav-down-arrow-symbol' src={window.downward_arrow_symbol} />
      </button>
      <div className='down-arrow-dropdown'>
        <button className='logout-button' onClick={() => props.logout()}>Logout</button>
      </div>
    </div>
  );
};

export default connect(null, mdp)(DownArrowComponents);
