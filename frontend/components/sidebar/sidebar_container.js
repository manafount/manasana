import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  errors: state.session.errors,
  teams: state.teams,
  currentTeam: state.currentTeam
});

export default connect(
  mapStateToProps
)(Sidebar);
