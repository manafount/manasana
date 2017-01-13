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

  has_many :memberships

  has_many :members,
  through: :memberships,
  source: :user
  
  belongs_to :leader,
  foreign_key: :leader_id,
  class_name: :User

  has_many :projects
end
