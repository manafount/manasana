import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import CurrentTeamReducer from './current_team_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  currentTeam: CurrentTeamReducer
});

export default RootReducer;
