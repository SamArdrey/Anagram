json.photoUrls @post.photos.map { |file| url_for(file) }
json.extract! post, :id, :body_text