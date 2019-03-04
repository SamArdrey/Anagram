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

  componentDidUpdate() {

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
          <img src={this.props.currentUser.posts[0].photoUrl} alt=""/>
          {console.log(this.props.currentUser.posts[0].photoUrl)}
        </div>

      )
    } else {
      return <LoginFormContainer />
    }
  }

}


export default Splash;