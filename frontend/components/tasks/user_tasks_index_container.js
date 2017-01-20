import React from 'react';
import { connect } from 'react-redux';
import UserTasksIndex from './user_tasks_index';
import { fetchProject, fetchProjects, updateProject, createProject } from '../../actions/project_actions';
import { fetchTask, fetchTasks, updateTask, createTask } from '../../actions/task_actions';
import { fetchTeams } from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  errors: state.session.errors,
  teams: state.teams,
  currentTeam: state.currentTeam,
  projectId: ownProps.params.projectId,
  projects: state.projects,
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  fetchProject: (id) => dispatch(fetchProject(id)),
  fetchTeams: () => dispatch(fetchTeams()),
  updateProject: (project) => dispatch(updateProject(project)),
  fetchTasks: (projectId) => dispatch(fetchTasks(projectId)),
  fetchTask: (id) => dispatch(fetchTask(id)),
  updateTask: (task) => dispatch(updateTask(task)),
  createTask: (task) => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTasksIndex);
