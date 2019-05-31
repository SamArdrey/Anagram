import { logout } from '../../actions/session_actions';
import { fetchUserById } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchAllLikes } from '../../actions/like_actions';
import { fetchAllFollowing, deleteFollow, createFollow } from '../../actions/follow_actions';
import Profile from './profile';

import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  let profileId = parseInt(ownProps.match.url.slice(1));

  return {
    profileId: profileId,
    loggedIn: Boolean(state.session.id),
    currentProfile: state.entities.users[profileId],
    following: state.entities.following,
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchPosts: userId => dispatch(fetchPosts(userId)),
      logoutUser: () => dispatch(logout()),
      fetchUserById: userId => dispatch(fetchUserById(userId)),
      fetchAllLikes: () => dispatch(fetchAllLikes()),
      fetchAllFollowing: () => dispatch(fetchAllFollowing()),
      follow: (followedUserId) => dispatch(createFollow(followedUserId)),
      unfollow: (follow) => dispatch(deleteFollow(follow)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
