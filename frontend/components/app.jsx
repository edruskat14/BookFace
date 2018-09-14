import React from 'react';
import Greeting from './greeting/greeting';
import FeedContainer from './feed/feed_container';
import userProfileContainer from './user_profile/user_profile_container';
import { Route } from 'react-router-dom';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import AuthRoute from '../util/route_util/auth_route';
import ProtRoute from '../util/route_util/prot_route';
import { logout } from '../actions/session_actions';

const App = () => {
  return (
    <div>
      <AuthRoute path='/' component={Greeting} />
      <ProtRoute path='/feed' component={FeedContainer} />
      <ProtRoute path='/users/:userId' component={userProfileContainer} />
    </div>
  );
};

export default App;


// <AuthRoute path='/login' component={LoginFormContainer} />
// <AuthRoute path='/signup' component={SignupFormContainer} />
