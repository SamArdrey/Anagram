import ShowPost from './show_post';
import { openPostModal, closeModal } from '../../actions/modal_actions';
import { fetchPost } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';

const mSP = (state, ownProps) => {
  let currentPostId;
  let pageType;
  if (state.ui.modal) {
    currentPostId = state.ui.modal.imageId;
    pageType = 'modal';
  } else {
    currentPostId = ownProps.match.params.post_id;
    pageType = 'page';
  }

  return {
    currentPostId,
    current: state.entities.posts[currentPostId],
    users: state.entities.users,
    posts: state.entities.posts,
    formType: 'show',
    pageType: pageType,
  };
};

const mDP = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    closeModal: () => dispatch(closeModal),
    openPostModal: (modal, imageLocation, imageId) =>
      dispatch(openPostModal(modal, imageLocation, imageId))
  };
};

export default connect(mSP, mDP)(ShowPost);