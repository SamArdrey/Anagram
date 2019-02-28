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

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;