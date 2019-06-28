import ShowPost from './show_post';
import { openPostModal, closeModal } from '../../actions/modal_actions';
import { fetchPost } from '../../actions/post_actions';
import { connect } from 'react-redux';

const mSP = (state, ownProps) => {
  console.log(ownProps, state)
  let currentPostId;
  if (state.ui.modal) {
    currentPostId = state.ui.modal.imageId;
  } else {
    currentPostId = ownProps.match.params.post_id;
  }

  return {
    currentPostId: currentPostId,
    // currentUser: state.entities.users[state.session.id].username,
    // currentUserPhoto: state.entities.users[state.session.id].photoUrl,
    // currentPhotoComment: state.entities.posts[state.ui.modal.imageId].bodyText,
    // posts: state.entities.posts,
    formType: 'show',
  };
};

const mDP = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    closeModal: () => dispatch(closeModal),
    openPostModal: (modal, imageLocation, imageId) =>
      dispatch(openPostModal(modal, imageLocation, imageId))
  };
};

export default connect(mSP, mDP)(ShowPost);