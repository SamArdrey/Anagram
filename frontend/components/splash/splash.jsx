import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import HeaderPartial from './header';
import SplashBodyPartial from './body';
import PostsContainer from '../post/posts_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.logsOutUser = this.logsOutUser.bind(this);
  }

  logsOutUser() {
    this.props.logoutUser();
  }

  render() {
    let props = '';
    if (this.props.loggedIn) {
      return (
        <div className="class-body">
          <HeaderPartial />
          <SplashBodyPartial logout={this.logsOutUser} user={this.props.currentUser}/>
          <PostsContainer posts={this.props.currentUser.posts}/>
        </div>

      )
    } else {
      return <LoginFormContainer />
    }
  }

}


export default Splash;