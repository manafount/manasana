import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import CurrentTeamReducer from './current_team_reducer';
import ProjectsReducer from './projects_reducer';
import TasksReducer from './tasks_reducer';

const AppReducer = combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  currentTeam: CurrentTeamReducer,
  projects: ProjectsReducer,
  tasks: TasksReducer
});

const RootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return AppReducer(state, action);
};

export default RootReducer;
