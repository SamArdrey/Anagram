// render usual stuff
// inside of render, if current user exists, render normal splash which is in this
// if not, render login form container
// if this.state.user === undefined, then render login container

import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {

  }

  render() {

    if (this.props.loggedIn) {
      return (
        <>
        <header>
          <div className="header-content">
            <div className="header-left">
              <a href="/">
                <img className="header-camera-image" src={window.images.camera}/>
                {/* <img className="header-line-image" src={window.images.line}/> */}
                <p className="header-vertical-line"> | </p>
                <div className="header-logo"> Anagram </div>
              </a>
            </div>
            <div className="header-mid"></div>
            <div className="header-right">
            <a href="/" className="header-compass-link">
                <img className="header-compass-image" src={window.images.compass}/>
              </a>
              <a href="/" className="header-heart-link">
                <img className="header-heart-image" src={window.images.heart}/>
              </a>
              <a href="/" className="header-person-link">
                <img className="header-person-image" src={window.images.person}/>
              </a>
            </div>
          </div>
        </header>
        <body>
        <div>
          <h2>LOGGED IN B</h2>
        </div>
        </body>
        </>
      )
    } else {
      return <LoginFormContainer />
    }
  }

}

export default Splash;