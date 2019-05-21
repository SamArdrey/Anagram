import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';

export const receiveLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export const fetchAllLikes = () => dispatch => (
  LikeAPIUtil.fetchAllLikes().then(likes => (
    dispatch(receiveLikes(likes))
  ))
);

export const createLike = like => dispatch => (
  LikeAPIUtil.createLike(like).then((like) =>
    dispatch(receiveLikes(like)
  ))
);