import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { fetchAllComments, fetchComments, createComment } from '../../actions/comment_actions';

const mSP = (state, ownProps) => {
  return {
    currentPostId: ownProps.postId,
  };
};


const mDP = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
  };
};

export default connect(mSP, mDP)(CommentForm);