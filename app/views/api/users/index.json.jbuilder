@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :name, :profile_body
    json.photoUrl url_for(user.profile_photo)
  end
end