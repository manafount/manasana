import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS } from '../actions/project_actions';
import { merge } from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return action.project;
    default:
      return state;
  }
};

export default ProjectsReducer;
