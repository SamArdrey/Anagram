// render usual stuff
// inside of render, if current user exists, render normal splash which is in this
// if not, render login form container
// if this.state.user === undefined, then render login container

import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  componentDidUpdate() {

  }

  isLoggedIn() {

    if (this.props.username === undefined) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    if (this.props.username !== undefined) {
      return (
        <div>
          <h2>LOGGED IN BEEZY</h2>
        </div>
      )
    } else {
      return <LoginFormContainer />
    }
  }

}

export default SplashPage;