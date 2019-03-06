import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import HeaderPartial from './header';
import SplashBodyPartial from './body';
import PostsContainer from '../post/posts_container';
import Modal from '../modal/modal';

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
          <Modal />
          <HeaderPartial openCreatePostModal={this.props.openCreatePostModal}/>
          <SplashBodyPartial logout={this.logsOutUser} user={this.props.currentUser}/>
          <PostsContainer />
        </div>
      )
    } else {
      return <LoginFormContainer />
    }
  }
}


export default Splash;