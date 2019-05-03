json.posts do
  json.set! @post.id do
  json.extract! @post, :id, :body_text
  json.photoUrl url_for(@post.photo)
  end
end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id, :parent_id
    end
  end
end

json.likes do
  @post.likes.each do |like|
    json.set! like.id do
      json.exrtact! like, :id
      json.user like.user.username
    end
  end
end

json.users do
  @post.comments.each do |comment|
    user = comment.user
    json.set! user.id do
      json.extract! user, :id, :username, :name, :profile_body
      json.photoUrl url_for(user.profile_photo)
    end
  end
end