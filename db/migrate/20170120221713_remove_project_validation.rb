class RemoveProjectValidation < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :project_id
    add_column :tasks, :project_id, :integer
  end
end
