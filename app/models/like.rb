class Like < ApplicationRecord
  validates :post_id, presence: true
  validates :user_id, presence: true

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

  belongs_to :liker,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
