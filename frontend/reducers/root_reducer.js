import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import CurrentTeamReducer from './current_team_reducer';
import ProjectsReducer from './projects_reducer';
import TasksReducer from './tasks_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  currentTeam: CurrentTeamReducer,
  projects: ProjectsReducer,
  tasks: TasksReducer
});

export default RootReducer;
