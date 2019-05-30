import { connect } from 'react-redux';

import CreatePost from './create_post';
import { closeModal } from '../../actions/modal_actions';
import { uploadPhoto } from '../../actions/post_actions';

const mSP = (state) => {
  return {
    author: Object.keys(state.entities.users)[0]
  };
};

const mDP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    uploadPhoto: (photo) => dispatch(uploadPhoto(photo)),
  };
};

export default connect(mSP, mDP)(CreatePost);