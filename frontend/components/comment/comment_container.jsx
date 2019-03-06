import React from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComments } from '../../actions/comment_actions';

const mSP = state => {
  return {
    currentPostId: state.ui.modal.imageId,
    currentUser: state.entities.users[state.session.id].username,
    postBodyText: state.entities.posts[state.ui.modal.imageId].bodyText,
  };
};

const mDP = dispatch => {
  return {
    fetchComments: postId => dispatch(fetchComments(postId)),
  };
};

export default connect(mSP, mDP)(Comment);