import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const ProtRoute = ({ component: Component, path, loggedIn, exact }) => {
  return <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={'/'} />
    )
  )}/>
}

const msp = (state) => {
  return {
    loggedIn: !!state.session.id
  };
};

export default withRouter(connect(msp)(ProtRoute));
