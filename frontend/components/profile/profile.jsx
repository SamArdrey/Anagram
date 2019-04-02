import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import ProfileBodyPartial from './body';
import PostsContainer from '../post/posts_container';
import Modal from '../modal/modal';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserById(this.props.profileId);
  }

  render() {
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