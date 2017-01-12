# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  leader_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, :leader_id, presence: true

  has_many :members,
  foreign_key: :user_id,
  class_name: :User

  has_one :leader,
  foreign_key: :user_id,
  class_name: :User

  has_many :projects
end
