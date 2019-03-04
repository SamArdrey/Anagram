json.extract! @post, :id, :body_text
json.photoUrl url_for(@post.photo)