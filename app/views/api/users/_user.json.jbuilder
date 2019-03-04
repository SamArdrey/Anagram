json.extract! user, :id, :username, :name, :profile_body

if !!user.profile_photo
  json.photoUrl url_for(user.profile_photo)
end