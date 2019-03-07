@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :user_id, :parent_id, :body, :post_id, :user
  end
end
