import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { receiveTeam, receiveTeams, receiveTeamErrors } from '../actions/team_actions';

export const createTask = (task) => {
  return $.ajax({
    method: 'POST',
    url: `/api/projects/${task.project.id}`,
    data: {task}
  });
};


export const fetchTasks = (projectId) => {
  if (projectId) {
    return $.ajax({
      method: 'GET',
      url: `/api/projects/${projectId}/tasks`
    });
  }else{
    return $.ajax({
      method: 'GET',
      url: `/api/tasks`
    });
  }
};

export const editTask = (task) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: {task}
  });
};

export const fetchTask = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/tasks/${id}`
  });
};

export const deleteTask = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tasks/${id}`
  });
};
