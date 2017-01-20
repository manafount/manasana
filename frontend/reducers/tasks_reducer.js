import {
  RECEIVE_TASK,
  RECEIVE_TASKS,
  REMOVE_TASK} from '../actions/task_actions';
import { merge } from 'lodash';

const TasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      return merge({}, state, {[action.task.id]: action.task});
    case REMOVE_TASK:
      let newState = merge({}, state);
      delete newState[action.task.id];
      return newState;
    default:
      return state;
  }
};

export default TasksReducer;
