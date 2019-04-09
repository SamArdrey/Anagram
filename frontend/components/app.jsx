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
import SessionFormContainer from './session_form/session_form_container';
import ProfileContainer from './profile/profile_container';
import CreatePostContainer from './post/create_post_container';
import HeaderContainer from "./header_footer/header_container";
import ExploreContainer from './explore/explore_container';

const App = () => (
  <div>
    <ProtectedRoute component={HeaderContainer} />
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/upload" component={CreatePostContainer} />
      <Route exact path="/login" component={SessionFormContainer} />
      <ProtectedRoute exact path="/:user_id" component={ProfileContainer} />
      <Route exact path="/" component={ExploreContainer} />
    </Switch>
  </div>
);

export default App;