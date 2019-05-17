@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :body_text, :author_id
    json.photoUrl url_for(post.photo)
    json.username post.author.username
    json.commentIds post.comment_ids

    json.likes post.likers.length
      # post.likers.each do |like|
      #   json.extract! like, :username
      #   json.userId like.id
      #   json.profilePic url_for(like.profile_photo)
      # end
      # post.likers
    # end
  end
end



