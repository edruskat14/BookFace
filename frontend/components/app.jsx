import React from 'react';

import Greeting from './greeting/greeting';
import FeedContainer from './feed/feed_container';
import userShowContainer from './user_profile/user_show_container';
import userProfileEditContainer from './user_profile/user_profile_edit_container';

import { Route } from 'react-router-dom';
import AuthRoute from '../util/route_util/auth_route';
import ProtRoute from '../util/route_util/prot_route';

const App = () => {
  return (
    <div>
      <AuthRoute exact path='/' component={Greeting} />
      <ProtRoute path='/feed' component={FeedContainer} />
      <ProtRoute path='/users/:userId' component={userShowContainer} />
      <ProtRoute exact path='/users/:userId/edit' component={userProfileEditContainer} />
    </div>
  );
};

export default App;
