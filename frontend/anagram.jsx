import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {signup, login} from './util/session_api_util'
import {logout} from "./actions/session_actions";


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});