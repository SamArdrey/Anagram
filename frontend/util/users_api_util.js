export const fetchUsers = () => (
  $.ajax ({
    method: 'GET',
    url: `api/users/`
  })
);

export const fetchUserById = (userId) => (
  $.ajax ({
    method: 'GET',
    url: `api/users/${userId}`
  })
);