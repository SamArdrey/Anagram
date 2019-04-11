import React from 'react';
import ProfileBodyPartial from './body';
import PostsContainer from '../post/posts_container';
import Modal from '../modal/modal';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileId: this.props.profileId
    };

    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserById(this.state.profileId);
    this.props.fetchPosts(this.state.profileId);
  }

  changeState() {
    this.setState ({
      profileId: this.props.history.location.pathname.slice(1)
    });
  }

  render() {
    if (!this.props.profileId) {
      return null;
      //the else statement is for when a user switches
      //from one profile directly to another. This
      //way, a new fetch happens as soon as the url changes
      //and the first render happens.
    } else if (this.state.profileId != this.props.history.location.pathname.slice(1)){
      this.changeState();
      this.props.fetchUserById(this.props.history.location.pathname.slice(1));
      this.props.fetchPosts(this.props.history.location.pathname.slice(1));
    }

    return (
      <div className="class-body">
        <Modal />
        <ProfileBodyPartial
          profileId={this.props.profileId}
          logoutUser={this.props.logoutUser}
          currentUser={this.props.currentUser}
          currentUserId={this.props.currentUserId}
        />
        <PostsContainer currentProfileId={this.props.profileId}/>
      </div>
    )
  }
}


export default Profile;