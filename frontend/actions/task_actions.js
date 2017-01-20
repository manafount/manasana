import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_TASK = 'REMOVE_TASK';

export const createTask = task => dispatch => (
  TaskAPIUtil.createTask(task)
    .then(task => dispatch(receiveTask(task)))
);

export const updateTask = task => dispatch => (
  TaskAPIUtil.editTask(task)
    .then(task => dispatch(receiveTask(task)))
);

export const deleteTask = id => dispatch => (
  TaskAPIUtil.deleteTask(id)
    .then(task => dispatch(removeTask(task)))
);

export const fetchTask = (id) => dispatch => (
  TaskAPIUtil.fetchTask(id)
    .then(task => dispatch(receiveTask(task)))
);

export const fetchTasks = (projectId) => dispatch => (
  TaskAPIUtil.fetchTasks(projectId)
    .then(tasks => dispatch(receiveTasks(tasks)))
);

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  task
});

export const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task
});

export const receiveTasks = (tasks) => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
