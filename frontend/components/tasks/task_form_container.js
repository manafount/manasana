import { connect } from 'react-redux';
import TaskForm from './task_form';
import { fetchProject, fetchProjects, updateProject, createProject } from '../../actions/project_actions';
import { fetchTask, fetchTasks, updateTask, createTask } from '../../actions/task_actions';
import { fetchTeams } from '../../actions/team_actions';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  errors: state.session.errors,
  teams: state.teams,
  currentTeam: state.currentTeam,
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProject: (id) => dispatch(fetchProject(id)),
  fetchTeams: () => dispatch(fetchTeams()),
  updateProject: (project) => dispatch(updateProject(project)),
  fetchTasks: (project) => dispatch(fetchTasks(project)),
  fetchTask: (id) => dispatch(fetchTask(id)),
  updateTask: (task) => dispatch(updateTask(task)),
  createTask: (task) => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
