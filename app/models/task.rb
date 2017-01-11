# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  due         :date
#  completed   :boolean          default("false")
#  author_id   :integer          not null
#  project_id  :integer          not null
#  assignee_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ApplicationRecord
end
