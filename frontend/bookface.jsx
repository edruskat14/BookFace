import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';
import * as SessionApiUtil from './util/session_api_util';
import { fetchProfiles } from './actions/profile_actions';
import { fetchUsers } from './actions/user_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: { users: { [window.currentUser.id]: window.currentUser} },
        session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);


      delete window.currentUser;
    } else {
      store = configureStore();
    }

    //test
    window.dispatch = store.dispatch;
    window.logout = logout;
    window.fetchProfiles = fetchProfiles;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchUsers = fetchUsers;
    //test

  window.ajaxLogin = SessionApiUtil.login;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})
