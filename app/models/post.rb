# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  body_text  :string
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :author_id, presence: true

  has_one_attached :photo

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment,
    dependent: :destroy

  has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Like,
    dependent: :destroy

  has_many :likers,
    through: :likes
end
