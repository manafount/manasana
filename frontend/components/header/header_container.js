import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchTeam, fetchTeams, createTeam } from '../../actions/team_actions';

import Header from './header';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  teams: state.teams,
  currentTeam: state.currentTeam
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchTeam: (id) => dispatch(fetchTeam(id)),
  fetchTeams: () => dispatch(fetchTeams()),
  createTeam: (team) => dispatch(createTeam(team))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
