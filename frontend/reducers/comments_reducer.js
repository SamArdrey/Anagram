import merge from 'lodash/merge';

import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT
  } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, action.comment);
    default:
      return state;
  }
};


export default commentsReducer;