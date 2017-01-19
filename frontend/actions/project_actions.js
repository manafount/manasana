import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const createProject = project => dispatch => (
  ProjectAPIUtil.createProject(project)
    .then(project => dispatch(receiveProject(project)))
);

export const updateProject = project => dispatch => (
  ProjectAPIUtil.editProject(project)
    .then(project => dispatch(receiveProject(project)))
);

export const deleteProject = id => dispatch => (
  ProjectAPIUtil.deleteProject(id)
    .then(project => dispatch(removeProject(project)))
);

export const fetchProject = (id) => dispatch => (
  ProjectAPIUtil.fetchProject(id)
    .then(project => dispatch(receiveProject(project)))
);

export const fetchProjects = () => dispatch => (
  ProjectAPIUtil.fetchProjects()
    .then(projects => dispatch(receiveProjects(projects)))
);

export const removeProject = (project) => ({
  type: REMOVE_PROJECT,
  project
});

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
