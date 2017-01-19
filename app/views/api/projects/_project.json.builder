json.set! project.id do
  json.extract! project, :id, :name, :team_id, :description
end
