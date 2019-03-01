// render usual stuff
// inside of render, if current user exists, render normal splash which is in this
// if not, render login form container
// if this.state.user === undefined, then render login container

import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.logsOutUser = this.logsOutUser.bind(this);
  }

  componentDidUpdate() {

  }

  logsOutUser() {
    this.props.logoutUser()
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
        <div className="splash-body">
        <div className="splash-background-div">
          <div className="splash-left">
              <img className="splash-left-image" src={window.images.chuck} />
          </div>
          <div className="splash-right">
            <div className="spash-right-top">
              <div className="splash-right-top-username">{this.props.currentUser.username}</div>
              <button className="splash-right-top-logout" onClick={this.logsOutUser}>Logout</button>
            </div>
            <div className="splash-right-mid">
              <div className="splash-right-mid-posts"> 1000 posts </div>
              <div className="splash-right-mid-followers"> 1000 followers </div>
              <div className="splash-right-mid-following"> 1000 following </div>
            </div>
            <div className="splash-right-bot">
              <div className="splash-right-bot-name">{this.props.currentUser.name}</div>
              <div className="splash-right-bot-profile">{this.props.currentUser.profile_body}</div>
            </div>
          </div>
        </div>
        </div>
        </>
      )
    } else {
      return <LoginFormContainer />
    }
  }

}


export default Splash;