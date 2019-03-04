json.user do
  json.partial! "/api/users/user", user: @user
end

json.posts do
  @user.posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :body_text, :author_id
      json.photoUrl url_for(post.photo)
    end
  end
end