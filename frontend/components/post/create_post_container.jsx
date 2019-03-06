import CreatePost from './create_post';
import { openCreatePostModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mSP = (state) => {
  return {
    author: Object.keys(state.entities.users)[0]
  };
};

const mDP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal),
  };
};

export default connect(mSP, mDP)(CreatePost);