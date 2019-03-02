// render usual stuff
// inside of render, if current user exists, render normal splash which is in this
// if not, render login form container
// if this.state.user === undefined, then render login container

import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import HeaderPartial from './header.jsx'
import SplashBodyPartial from './body.jsx'
import postsReducer from '../../reducers/posts_reducer';

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
    let props = '';
    console.log(this.props.posts)
    if (this.props.posts) {
      props = (
        this.props.posts.map(post =>
          <li key={post.id}>
            x
            {/* <img src={post.photos[0]} /> */}
          </li>
        )
      )}

    if (this.props.loggedIn) {
      return (
        <>
          <HeaderPartial />
          <SplashBodyPartial user={this.props.currentUser}/>

          <div className="posts-container">
            <ul className="posts-ul">
              { props }
            </ul>
          </div>
        </>
      )
    } else {
      return <LoginFormContainer />
    }
  }

}


export default Splash;