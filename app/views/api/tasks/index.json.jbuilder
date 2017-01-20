@tasks.each do |task|
  # json.partial! "api/tasks/task", task: task
  json.set! task.id do
    json.extract! task, :id, :name, :description, :author_id, :project_id, :assignee_id, :due, :completed
  end
end
