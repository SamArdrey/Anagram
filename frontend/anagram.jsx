import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const userPosts = window.currentUser.posts;
    console.log(window.currentUser);
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        posts: userPosts
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    // delete window.userPosts;
  } else {
    store = configureStore();
  }

  window.store = store; //delete eventually


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});