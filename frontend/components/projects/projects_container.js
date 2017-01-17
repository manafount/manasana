import { connect } from 'react-redux';
import ProjectsIndex from './projects_index';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  errors: state.session.errors,
  teams: state.teams,
  currentTeam: state.currentTeam
});

export default connect(
  mapStateToProps
)(ProjectsIndex);
