import React from 'react';

class SplashBodyPartial extends React.Component {
  render(){
    return(
      <div className="splash-body">
        <div className="splash-background-div">
          <div className="splash-left">
              <img className="splash-left-image" src={this.props.user.photoUrl} />
          </div>
          <div className="splash-right">
            <div className="spash-right-top">
              <div className="splash-right-top-username">{this.props.user.username}</div>
              <button className="splash-right-top-logout" onClick={this.props.logout}>Logout</button>
              <a href="/" className='upload-container'><i className="fas fa-upload"></i></a>
            </div>
            <div className="splash-right-mid">
              <div className="splash-right-mid-posts"> 1000 posts </div>
              <div className="splash-right-mid-followers"> 1000 followers </div>
              <div className="splash-right-mid-following"> 1000 following </div>
            </div>
            <div className="splash-right-bot">
              <div className="splash-right-bot-name">{this.props.user.name}</div>
              <div className="splash-right-bot-profile">{this.props.user.profile_body}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashBodyPartial;
