import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { openPostModal } from '../../actions/modal_actions';

const mSP = state => {
  console.log(state)
  return {
    currentPostId: state.ui.modal.imageId,
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id].username,
    postBodyText: state.entities.posts[state.ui.modal.imageId].bodyText,
    comments: state.entities.comments,
    imageUrl: state.ui.modal.image,
    imageId: state.ui.modal.imageId
  };
};


const mDP = dispatch => {
  return {
    fetchComments: postId => dispatch(fetchComments(postId)),
    createComment: comment => dispatch(createComment(comment)),
    openPostModal: (modalType, imageUrl, imageId) => dispatch(openPostModal(modalType, imageUrl, imageId)),
  };
};

export default connect(mSP, mDP)(Comment);