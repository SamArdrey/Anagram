import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions.js";

import {
  RECEIVE_ALL_POSTS,
  RECEIVE_CURRENT_POST
} from "../actions/post_actions.js";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.payload.posts);
    case RECEIVE_CURRENT_POST:
      const newPost = { [action.payload.posts.id]: action.payload.post };
      return merge({}, state, newPost);
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.posts);
    default:
      return state;
  }
};

export default postsReducer;