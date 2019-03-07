export const fetchComments = (postId) => (
  $.ajax ({
    method: 'GET',
    url: `/api/posts/${postId}/comments`
  })
);

export const fetchComment = commentId => (
  $.ajax ({
    method: 'GET',
    url: `/api/comments/${commentId}`
  })
);

export const createComment = comment => (
  $.ajax ({
    method: 'POST',
    url: `/api/comments/`,
    data: { comment }
  })
);

export const fetchAuthor = authorId => (
  $.ajax ({
    method: 'GET',
    url: `api/users/${authorId}`
  })
);