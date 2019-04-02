import {logout} from '../../actions/session_actions';
import {fetchUserById} from '../../actions/user_actions';
import { connect } from 'react-redux';
import Profile from './profile';
import React from 'react';
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    profileId: parseInt(ownProps.match.url.slice(1)),
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      logoutUser: () => dispatch(logout()),
      fetchUserById: (userId) => dispatch(fetchUserById()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
