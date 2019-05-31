import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_ALL_FOLLOWING = 'RECEIVE_ALL_FOLLOWING';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const DESTROY_FOLLOW = 'DESTROY_FOLLOW';

export const receiveFollowing = follows => ({
  type: RECEIVE_ALL_FOLLOWING,
  follows
});

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const destroyFollow = follow => ({
  type: DESTROY_FOLLOW,
  follow
});

export const fetchAllFollowing = () => dispatch => (
  FollowAPIUtil.fetchAllFollowing().then(follows => (
    dispatch(receiveFollowing(follows))
  ))
);

export const createFollow = followedId => dispatch => (
  FollowAPIUtil.createFollow(followedId).then((follow) =>
    dispatch(receiveFollow(follow)
  ))
);

export const deleteFollow = follow => dispatch => (
  FollowAPIUtil.deleteFollow(follow).then((follow) =>
    dispatch(destroyFollow(follow)
  ))
);