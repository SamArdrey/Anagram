class Comment < ApplicationRecord
  validates :user_id, :post_id, :body, presence: true

  belongs_to :parent,
    primary_key: :id,
    foreign_key: :parent_id,
    class_name: :Comment,

  has_many :children,
    primary_key: :parent_id,
    foreign_key: :id,
    class_name: :Comment,
    dependent: :destroy

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post
end
