import merge from 'lodash/merge';

import {
  RECEIVE_ALL_LIKES,
  } from '../actions/like_actions';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_LIKES:
      return merge({}, action.likes);
    default:
      return state;
  }
};


export default likesReducer;