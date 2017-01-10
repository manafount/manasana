class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.text :description
      t.date :due
      t.boolean :completed, default: false
      t.integer :author_id, null: false
      t.integer :project_id, null: false
      t.integer :assignee_id

      t.timestamps
    end
    add_index :tasks, :author_id
    add_index :tasks, :project_id
    add_index :tasks, :assignee_id
  end
end
