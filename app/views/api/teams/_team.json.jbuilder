json.set! team.id do
  json.extract! team, :id, :name, :leader_id
end
