import merge from 'lodash/merge';

import {
  RECEIVE_ALL_FOLLOWING,
  RECEIVE_FOLLOW,
  DESTROY_FOLLOW,
  } from '../actions/follow_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_FOLLOWING:
      return merge({}, action.follows);
    case RECEIVE_FOLLOW:
      return merge({}, state, action.follow);
    case DESTROY_FOLLOW:
      return state;
    default:
      return state;
  }
};


export default followsReducer;