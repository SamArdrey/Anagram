import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/router_util';
import SignUpFormContainer from './signup_form/signup_form_container';
import SplashContainer from './splash/splash_container';
import CreatePostContainer from './post/create_post_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/upload" component={CreatePostContainer} />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;