import React from 'react';
import PostsContainer from '../post/posts_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileId: this.props.profileId
    };

    this.following = false;
    this.followCount = 0;

    this.changeState = this.changeState.bind(this);
    this.toggleLogoutButton = this.toggleLogoutButton.bind(this);
    this.toggleFollowButton = this.toggleFollowButton.bind(this);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserById(this.state.profileId);
    this.props.fetchPosts(this.state.profileId);
    this.props.fetchAllLikes();
    this.props.fetchAllFollowing().then(() => this.following = !!this.props.following[this.props.profileId]);
  }

  changeState() {
    this.setState ({
      profileId: this.props.history.location.pathname.slice(1)
    });
  }

  toggleLogoutButton() {
    if (this.props.currentUserId === this.props.profileId) {
      return (
        <button
          className="profile-right-top-logout"
          onClick={this.props.logoutUser}>
            Logout
        </button>
      )
    } else {
      return this.toggleFollowButton()
    }
  }

  toggleFollowButton() {
    if (this.following) {
      return(
        <button
          className="profile-right-top-logout"
          onClick={() => this.unfollow()}>
            Unfollow
        </button>
      )
    } else {
      return (
        <button
          className="profile-right-top-logout"
          onClick={() => this.follow()}>
            Follow
        </button>
      )
    }
  }

  unfollow() {
    this.followCount--;
    this.following = false;
    let id = this.props.following[this.props.profileId].id;
    this.props.unfollow(id);
    this.props.fetchAllFollowing();
    this.setState();
  }

  follow() {
    this.followCount++;
    this.following = true;
    this.props.follow(this.props.profileId).then(() => {
      this.props.fetchAllFollowing();
    })
    this.setState();
  }

  render() {
    if (!this.props.profileId ||
        !this.props.currentProfile) {
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

    let posts;
    if (this.props.currentProfile.posts) {
      posts = Object.keys(this.props.currentProfile.posts).length;
    } else {
      posts = 0;
    }

    return (
      <>
        <div className="class-body">
        <div className="profile-body">
          <div className="profile-left">
              <img className="profile-left-image" src={this.props.currentProfile.photoUrl} />
          </div>
          <div className="profile-right">
            <div className="profile-right-top">
              <div className="profile-right-top-username">{this.props.currentProfile.username}</div>
              { this.toggleLogoutButton() }
            </div>
            <div className="profile-right-mid">
              <div className="profile-right-mid-posts"> { posts } posts </div>
              <div className="profile-right-mid-followers"> { this.props.currentProfile.followers + this.followCount } followers </div>
              <div className="profile-right-mid-following"> { this.props.currentProfile.following } following </div>
            </div>
            <div className="profile-right-bot">
              <div className="profile-right-bot-name">{ this.props.currentProfile.name }</div>
              <div className="profile-right-bot-profile">{ this.props.currentProfile.profile_body }</div>
            </div>
          </div>
        </div>
          <PostsContainer currentProfileId={this.props.profileId}/>
        </div>
      </>
    )
  }
}


export default Profile;