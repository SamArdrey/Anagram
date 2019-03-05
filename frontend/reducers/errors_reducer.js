import { combineReducers } from 'redux';
import userErrors from './user_errors_reducer';
import sessionErrors from './session_errors_reducer';

export default combineReducers({
  userErrors,
  sessionErrors
});