import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return <Route path={path} exact={exact} render={(props) => (
      loggedIn ? (
        <Redirect to={'/'} />
      ) : (
        <Component {...props} />
      )
    )}/>
}

const msp = (state) => {
  return {
    loggedIn: !!state.session.id
  };
};

export default withRouter(connect(msp)(Auth));
