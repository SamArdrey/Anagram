json.set! @post.id do
  json.extract! @post, :id, :body_text, :author_id
  json.photoUrl url_for(@post.photo)
  json.username @post.author.username
  json.commentIds @post.comment_ids
  json.likes @post.likers.length
end