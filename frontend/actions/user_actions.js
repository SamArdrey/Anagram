export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveAllUsers = payload => ({
  type: RECEIVE_ALL_USERS,
  payload
});

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(users => (
    dispatch(receiveAllUsers(users))
  ))
);