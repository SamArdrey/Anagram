@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :body_text, :author_id
    json.photoUrl url_for(post.photo)
    json.username post.author.username
    json.commentIds post.comment_ids

    json.likes do
      post.likers.each do |like|
        json.extract! like, :username
        json.userId like.id
        json.profilePic url_for(like.profile_photo)
      end
    end
  end
end
