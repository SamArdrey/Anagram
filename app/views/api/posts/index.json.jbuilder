@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :body_text, :author_id
    json.photoUrl url_for(post.photo)
    json.commentIds post.comment_ids
    json.likes post.likes
    json.username post.author.username
  end
end
