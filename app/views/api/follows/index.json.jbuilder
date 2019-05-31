@follows.each do |follow|
  json.set! follow.followed_user_id do
    json.extract! follow, :id, :followed_user_id
  end
end