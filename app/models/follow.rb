class Follow < ApplicationRecord
  validates :user_id, presence: true
  validates :follower_id, presence: true

  belongs_to :followed_user,
    primary_key: :id,
    foreign_key: :followed_user_id,
    class_name: :User

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User
end
