# json.set! @user.id do
#   json.extract! user, :id, :username, :name, :profile_body
#   json.photoUrl url_for(user.profile_photo)
# end

json.user do
  json.partial! "/api/users/user", user: @user
  json.extract! @user, :username
end

