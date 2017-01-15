import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';
export const CLEAR_TEAM_ERRORS = 'CLEAR_TEAM_ERRORS';

export const createTeam = team => dispatch => (
  TeamAPIUtil.createTeam(team)
    .then(team => dispatch(receiveTeam(team)))
);

export const editTeam = team => dispatch => (
  TeamAPIUtil.editTeam(team)
    .then(team => dispatch(receiveTeam(team)))
);

export const fetchTeam = (id) => dispatch => (
  TeamAPIUtil.fetchTeam(id)
    .then(team => dispatch(receiveTeam(team)))
);

export const fetchTeams = () => dispatch => (
  TeamAPIUtil.fetchTeams()
    .then(teams => dispatch(receiveTeams(teams)))
);

export const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  team
});

export const receiveTeams = teams => ({
  type: RECEIVE_TEAMS,
  teams
});
