export const fetchPosts = (userId) => (
  $.ajax ({
    method: 'GET',
    url: `/api/users/${userId}/posts`,
  })
);

export const fetchPost = id => (
  $.ajax ({
    method: 'GET',
    url: `/api/posts/${id}`,
  })
);

export const fetchAllPosts = () => (
  $.ajax ({
    method: 'GET',
    url: `/api/posts/all`,
  })
);

export const createPost = post => (
  $.ajax ({
    method: 'POST',
    url: `/api/posts/`,
    data: { post }
  })
);

export const uploadPhoto = formData => (
  $.ajax({
    url: '/api/posts/',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
)