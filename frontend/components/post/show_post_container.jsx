import ShowPost from './show_post';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mSP = (state) => {
  return {
    currentPost: state.ui.modal.image,
    currentUser: state.entities.users[state.session.id].username,
    formType: 'show',
  };
};

const mDP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal)
  };
};

export default connect(mSP, mDP)(ShowPost);