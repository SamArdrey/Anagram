import { combineReducers } from 'redux';
import users from './users_reducer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import likes from './likes_reducer';
import following from './follows_reducer';

export default combineReducers({
  users,
  posts,
  comments,
  likes,
  following
});