import ShowPost from './show_post';
import React from 'react';
import { openPostModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mSP = (state) => {
  return {
    currentPost: state.ui.modal.image,
    currentPostId: state.ui.modal.imageId,
    currentUser: state.entities.users[state.session.id].username,
    currentUserPhoto: state.entities.users[state.session.id].photoUrl,
    currentPhotoComment: state.entities.posts[state.ui.modal.imageId].bodyText,
    posts: state.entities.posts,
    formType: 'show',
  };
};

const mDP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal),
    openPostModal: (modal, imageLocation, imageId) => dispatch(openPostModal(modal, imageLocation, imageId))
  };
};

export default connect(mSP, mDP)(ShowPost);