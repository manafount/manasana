@projects.each do |project|
  # json.partial! "api/projects/project", project: project
  json.set! project.id do
    json.extract! project, :id, :name, :team_id, :description
  end
end
