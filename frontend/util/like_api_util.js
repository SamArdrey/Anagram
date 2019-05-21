export const fetchAllLikes = () => (
  $.ajax ({
    method: 'GET',
    url: `/api/likes/`
  })
);

export const createLike = like => (
  $.ajax ({
    method: 'POST',
    url: `/api/likes/`,
    data: { like }
  })
);