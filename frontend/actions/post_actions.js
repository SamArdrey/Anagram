import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_CURRENT_POST = 'RECEIVE_CURRENT_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';

export const receivePosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_CURRENT_POST,
  post
});

export const fetchPosts = userId => dispatch => (
  PostAPIUtil.fetchPosts(userId).then(posts => (
    dispatch(receivePosts(posts))
  ))
);

export const fetchAllPosts = () => dispatch => (
  PostAPIUtil.fetchAllPosts().then(posts => (
    dispatch(receivePosts(posts))
  ))
);

export const fetchPost = id => dispatch => (
  PostAPIUtil.fetchPost(id).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const uploadPhoto = photo => dispatch => (
  PostAPIUtil.uploadPhoto(photo).then(post =>
    dispatch(receivePost(post)
  ), err => (
      dispatch(receiveErrors(err.responseJSON))
  ))
);