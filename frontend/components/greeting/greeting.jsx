import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  if(!props.currentUser) {
    return(
      <div>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    )
  } else {
    return(
      <div>
        <h1>Welcome {props.currentUser.username}!</h1>
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  }
};

export default Greeting;
