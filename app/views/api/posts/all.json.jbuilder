@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :body_text, :author_id
    json.photoUrl url_for(post.photo)
    json.commentIds post.comment_ids
    json.username post.author.username
    json.profilePic url_for(post.author.profile_photo)
  end
end
