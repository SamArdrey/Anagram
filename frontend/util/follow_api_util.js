export const fetchAllFollowing = () => (
  $.ajax ({
    method: 'GET',
    url: `/api/follows/`
  })
);

export const createFollow = followed_user_id => (
  $.ajax ({
    method: 'POST',
    url: `/api/follows/`,
    data: {follow: { followed_user_id }}
  })
);

export const deleteFollow = follow => (
  $.ajax ({
    method: 'DELETE',
    url: `/api/follows/${follow}`,
  })
);