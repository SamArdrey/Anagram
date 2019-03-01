# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  name            :string           not null
#  username        :string           not null
#  email           :string           not null
#  profile_body    :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :name, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post,
    dependent: :destroy

  attr_reader :password

  after_initialize :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)

    return @user if @user && @user.is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
