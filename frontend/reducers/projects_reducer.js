import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS } from '../actions/project_actions';
import { merge } from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.project.id]: action.project});
    default:
      return state;
  }
};

export default ProjectsReducer;