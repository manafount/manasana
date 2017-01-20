import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { fetchProject, fetchProjects, updateProject, createProject } from '../../actions/project_actions';
import { fetchTeams } from '../../actions/team_actions';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  errors: state.session.errors,
  teams: state.teams,
  currentTeam: state.currentTeam,
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: (id) => dispatch(fetchProjects(id)),
  fetchTeams: () => dispatch(fetchTeams()),
  createProject: (project) => dispatch(createProject(project)),
  updateProject: (project) => dispatch(updateProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
