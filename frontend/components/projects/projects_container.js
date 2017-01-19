import { connect } from 'react-redux';
import ProjectsIndex from './projects_index';
import { fetchProject, fetchProjects, updateProject, createProject } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  errors: state.session.errors,
  teams: state.teams,
  currentTeam: state.currentTeam,
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProject: (id) => dispatch(fetchProject(id)),
  fetchProjects: (team) => dispatch(fetchProjects(team)),
  createProject: (project) => dispatch(createProject(project)),
  updateProject: (project) => dispatch(updateProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex);
