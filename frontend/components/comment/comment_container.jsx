import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { openPostModal } from '../../actions/modal_actions';

const mSP = (state, ownProps) => {
  return {
    currentPostId: ownProps.post.id,
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id].username,
    postBodyText: ownProps.post.bodyText,
    comments: state.entities.comments,
    imageUrl: ownProps.post.photoUrl,
    imageId: ownProps.post.id
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