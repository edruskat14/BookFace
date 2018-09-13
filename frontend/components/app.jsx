import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import AuthRoute from '../util/route_util';
import { logout } from '../actions/session_actions';

const App = () => {
  return (
    <div>
      <Route path='/' component={GreetingContainer} />
    </div>
  );
};

export default App;


// <AuthRoute path='/login' component={LoginFormContainer} />
// <AuthRoute path='/signup' component={SignupFormContainer} />
