json.array! @posts do |post|
  json.extract! post, :id, :body_text
  json.photoUrl url_for(post.photo)
end