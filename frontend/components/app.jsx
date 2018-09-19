import React from 'react';

import GreetingContainer from './greeting/greeting_container';
import FeedContainer from './feed/feed_container';
import userShowContainer from './user_profile/user_show_container';
import userProfileEditContainer from './user_profile/user_profile_edit_container';
import UserSearchDisplay from './users_display/search_display_container';
import { Route } from 'react-router-dom';
import AuthRoute from '../util/route_util/auth_route';
import ProtRoute from '../util/route_util/prot_route';

const App = () => {
  return (
    <div>
      <AuthRoute exact path='/' component={GreetingContainer} />
      <ProtRoute path='/feed' component={FeedContainer} />
      <ProtRoute path='/users/:userId' component={userShowContainer} />
      <ProtRoute exact path='/users/:userId/edit' component={userProfileEditContainer} />
      <ProtRoute path='/search_results' component={UserSearchDisplay} />
    </div>
  );
};

export default App;
