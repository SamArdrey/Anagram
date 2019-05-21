@likes.each do |like|
  json.set! like.post_id do
    json.extract! like, :id, :post_id
  end
end