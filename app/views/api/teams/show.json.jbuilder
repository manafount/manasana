# json.partial! "api/teams/team", team: @team
json.extract! @team, :id, :name, :leader_id
