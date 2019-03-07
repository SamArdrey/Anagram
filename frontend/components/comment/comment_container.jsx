import React from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComments, fetchAuthor } from '../../actions/comment_actions';

const mSP = state => {
  return {
    currentPostId: state.ui.modal.imageId,
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id].username,
    postBodyText: state.entities.posts[state.ui.modal.imageId].bodyText,
    comments: state.entities.comments
  };
};


const mDP = dispatch => {
  return {
    fetchComments: postId => dispatch(fetchComments(postId)),
    fetchAuthor: authorId => dispatch(fetchAuthor(authorId)),
  };
};

export default connect(mSP, mDP)(Comment);