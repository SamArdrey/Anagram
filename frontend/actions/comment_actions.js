import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const fetchComments = postId => dispatch => (
  CommentAPIUtil.fetchComments(postId).then(comments => (
    dispatch(receiveComments(comments))
  ))
);

export const fetchComment = commentId => dispatch => (
  CommentAPIUtil.fetchComment(commentId).then(comment =>
    dispatch(receiveComment(comment)
  ))
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment).then((comment) =>
    dispatch(receiveComment(comment)
  ))
);
