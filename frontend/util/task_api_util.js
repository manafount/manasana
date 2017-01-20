import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { receiveTeam, receiveTeams, receiveTeamErrors } from '../actions/team_actions';

export const createTask = (task) => {
  if (task.task.project_id){
    return $.ajax({
      method: 'POST',
      url: `/api/projects/${task.task.project_id}/tasks`,
      data: task
    });
  }else{
    return $.ajax({
      method: 'POST',
      url: `/api/tasks`,
      data: task
    });
  }
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
