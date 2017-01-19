import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { receiveTeam, receiveTeams, receiveTeamErrors } from '../actions/team_actions';

export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: project
  });
};

export const fetchProjects = (team) => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects'
  });
};

export const fetchProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${id}`
  });
};
