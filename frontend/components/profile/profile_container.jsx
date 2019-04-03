import { logout } from '../../actions/session_actions';
import { fetchUserById } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';

import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  let profileId = parseInt(ownProps.match.url.slice(1));

  return {
    profileId: profileId,
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[profileId],
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchPosts: userId => dispatch(fetchPosts(userId)),
      logoutUser: () => dispatch(logout()),
      fetchUserById: userId => dispatch(fetchUserById(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
