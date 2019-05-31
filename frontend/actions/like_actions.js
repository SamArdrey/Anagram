import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DESTROY_LIKE = 'DESTROY_LIKE';

export const receiveLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const destroyLike = like => ({
  type: DESTROY_LIKE,
  like
});

export const fetchAllLikes = () => dispatch => (
  LikeAPIUtil.fetchAllLikes().then(likes => (
    dispatch(receiveLikes(likes))
  ))
);

export const createLike = like => dispatch => (
  LikeAPIUtil.createLike(like).then((like) =>
    dispatch(receiveLike(like)
  ))
);

export const deleteLike = like => dispatch => (
  LikeAPIUtil.deleteLike(like).then((like) =>
    dispatch(destroyLike(like)
  ))
);