import {RECEIVE_TEAM} from '../actions/team_actions';


import merge from 'lodash/merge';

const CurrentTeamReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEAM:
      return action.team;
    default:
      return state;
  }
};

export default CurrentTeamReducer;
