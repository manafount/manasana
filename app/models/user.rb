# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :tasks,
  foreign_key: :author_id

  has_many :assigned_tasks,
  foreign_key: :assignee_id,
  class_name: :Task

  has_one :membership

  has_many :teams,
  through: :membership,
  source: :team

  has_many :projects,
  through: :teams,
  source: :projects

  has_many :teammates,
  through: :teams,
  source: :members

  attr_reader :password

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end
end
