import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import FeedContainer from './feed/feed_container';
import { Route } from 'react-router-dom';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import AuthRoute from '../util/route_util/auth_route';
import ProtRoute from '../util/route_util/prot_route';
import { logout } from '../actions/session_actions';

const App = () => {
  return (
    <div>
      <AuthRoute path='/' component={GreetingContainer} />
      <ProtRoute path='/feed' component={FeedContainer} />
    </div>
  );
};

export default App;


// <AuthRoute path='/login' component={LoginFormContainer} />
// <AuthRoute path='/signup' component={SignupFormContainer} />
