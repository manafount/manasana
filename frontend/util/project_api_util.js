import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { receiveTeam, receiveTeams, receiveTeamErrors } from '../actions/team_actions';

export const createTeam = (team) => {
  return $.ajax({
    method: 'POST',
    url: '/api/teams',
    data: team
  });
};

export const fetchTeams = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/teams'
  });
};

export const fetchTeam = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${id}`
  });
};

export const editTeam = (team) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/teams/${team.id}`,
    data: team
  });
};
