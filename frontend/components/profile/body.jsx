import React from 'react';

class ProfileBodyPartial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: (false)
    };

    this.toggleLogoutButton = this.toggleLogoutButton.bind(this);
    this.toggleFollowButton = this.toggleFollowButton.bind(this);
  }

  toggleLogoutButton() {
    if (this.props.currentUserId === this.props.profileId) {
      return (
        <button className="profile-right-top-logout" onClick={this.props.logoutUser}>Logout</button>
      )
    } else {
      return this.toggleFollowButton()
    }
  }

  toggleFollowButton() {
    if (true) {
      <button className="profile-right-top-logout" onClick={this.props.logoutUser}>Unfollow</button>

    } else {
      <button className="profile-right-top-logout" onClick={this.props.logoutUser}>Follow</button>
    }
  }

  render(){
    if (!this.props.currentProfile) {
      return null;
    }

    let posts;
    if (this.props.currentProfile.posts) {
      posts = Object.keys(this.props.currentProfile.posts).length;
    } else {
      posts = 0;
    }

    return(
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
              <div className="profile-right-mid-followers"> { this.props.currentProfile.followers } followers </div>
              <div className="profile-right-mid-following"> { this.props.currentProfile.following } following </div>
            </div>
            <div className="profile-right-bot">
              <div className="profile-right-bot-name">{ this.props.currentProfile.name }</div>
              <div className="profile-right-bot-profile">{ this.props.currentProfile.profile_body }</div>
            </div>
          </div>
      </div>
    )
  }
}

export default ProfileBodyPartial;
