export const fetchAllfollowing = () => (
  $.ajax ({
    method: 'GET',
    url: `/api/follows/`
  })
);

export const createfollow = followed_user_id => (
  $.ajax ({
    method: 'POST',
    url: `/api/follows/`,
    data: {follow: { followed_user_id }}
  })
);

export const deletefollow = follow => (
  $.ajax ({
    method: 'DELETE',
    url: `/api/follows/${follow.id}`,
  })
);