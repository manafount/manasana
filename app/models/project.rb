# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  team_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
  validates :name, :team_id, presence: true

  has_many :tasks

  belongs_to :team

  has_many :contributors,
  through: :team,
  source: :members
end
