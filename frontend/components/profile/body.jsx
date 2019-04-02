import React from 'react';

class ProfileBodyPartial extends React.Component {
  render(){
    let posts;
    if (this.props.currentUser.posts) {
      posts = Object.keys(this.props.currentUser.posts).length;
    } else {
      posts = 0;
    }

    //Hide logout button?
    let hidden;
    if (this.props.currentUserId === this.props.profileId) {
      hidden = false;
    } else {
      hidden = true;
    }

    return(

      <div className="profile-body">
        <div className="profile-background-div">
          <div className="profile-left">
              <img className="profile-left-image" src={this.props.currentUser.photoUrl} />
          </div>
          <div className="profile-right">
            <div className="spash-right-top">
              <div className="profile-right-top-username">{this.props.currentUser.username}</div>
              <button className="profile-right-top-logout" onClick={this.props.logoutUser} hidden={hidden}>Logout</button>
              <a href="/" className='upload-container'><i className="fas fa-upload"></i></a>
            </div>
            <div className="profile-right-mid">
              <div className="profile-right-mid-posts"> { posts } posts </div>
              <div className="profile-right-mid-followers"> 1000 followers </div>
              <div className="profile-right-mid-following"> 1000 following </div>
            </div>
            <div className="profile-right-bot">
              <div className="profile-right-bot-name">{this.props.currentUser.name}</div>
              <div className="profile-right-bot-profile">{this.props.currentUser.profile_body}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileBodyPartial;
