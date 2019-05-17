@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :body_text, :author_id
    json.photoUrl url_for(post.photo)
    json.commentIds post.comment_ids

    json.likes post.likers.length

    json.username post.author.username
    json.profilePic url_for(post.author.profile_photo)
  end
end

@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :user_id, :parent_id, :body, :post_id, :user
  end
end