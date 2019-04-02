import { RECEIVE_USER_ERRORS } from "./session_actions";
import * as APIUtil from "../util/users_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveAllUsers = payload => ({
  type: RECEIVE_ALL_USERS,
  payload
});

export const receiveUser = payload => ({
  type: RECEIVE_USER_ERRORS,
  payload
});

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(users => (
    dispatch(receiveAllUsers(users))
  ))
);

export const fetchUserById = userId => dispatch => (
  APIUtil.fetchUserById(userId).then(user => (
    dispatch(receiveUser(user))
  ))
);