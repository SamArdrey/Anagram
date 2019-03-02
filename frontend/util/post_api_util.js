export const fetchPosts = authorId => (
  $.ajax ({
    method: 'GET',
    url: `/api/posts/`,
    data: authorId
  })
);

export const fetchPost = id => (
  $.ajax ({
    method: 'GET',
    url: `/api/posts/${id}`,
  })
);

export const createPost = post => (
  $.ajax ({
    method: 'POST',
    url: `/api/posts/`,
    data: { post }
  })
);

export const updatePost = post => (
  $.ajax ({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post }
  })
);