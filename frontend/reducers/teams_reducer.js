import {
  RECEIVE_TEAM,
  RECEIVE_TEAMS } from '../actions/team_actions';

import merge from 'lodash/merge';

const TeamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEAMS:
      return action.teams;
    default:
      return state;
  }
};

export default TeamsReducer;
