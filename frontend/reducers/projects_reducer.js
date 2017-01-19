import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS,
  REMOVE_PROJECT} from '../actions/project_actions';
import { merge } from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.project.id]: action.project});
    case REMOVE_PROJECT:
      let newState = merge({}, state);
      delete newState[action.project.id];
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;
