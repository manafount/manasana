json.set! task.id do
  json.extract! task, :id, :name, :description, :author_id, :project_id, :assignee_id, :due, :completed
end
