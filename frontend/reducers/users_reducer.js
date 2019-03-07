import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.payload.user.id]: action.payload.user });
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.payload);
    default:
      return state;
  }
};

export default usersReducer;