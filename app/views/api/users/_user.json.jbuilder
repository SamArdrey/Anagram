json.extract! user, :id, :username, :name, :profile_body

if !!user.profile_photo
  json.photoUrl url_for(user.profile_photo)
end

if user.posts
  json.posts do
    user.posts.each do |post|
      json.set! post.id do
        json.extract! post, :id, :body_text, :author_id
        json.photoUrl url_for(post.photo)
      end
    end
  end
end