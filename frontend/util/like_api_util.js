export const fetchAllLikes = () => (
  $.ajax ({
    method: 'GET',
    url: `/api/likes/`
  })
);

export const createLike = post_id => (
  $.ajax ({
    method: 'POST',
    url: `/api/likes/`,
    data: {like: { post_id }}
  })
);

export const deleteLike = like => (
  $.ajax ({
    method: 'DELETE',
    url: `/api/likes/${like.id}`,
  })
);