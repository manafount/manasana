import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FormContainer from './splash/form_container';
import Splash from './splash/splash';
import Form from './splash/form';
import App from './app';
import Dashboard from './dashboard/dashboard';
import TasksIndexContainer from './tasks/tasks_index_container';
import UserTasksIndexContainer from './tasks/user_tasks_index_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/app');
    }
  };

  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={hashHistory}>
        <Route path="/app" component={App} onEnter={_ensureLoggedIn}>
          <IndexRoute component={Dashboard} onEnter={_ensureLoggedIn}/>
          <Route path="/projects/:projectId" component={TasksIndexContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/tasks" component={UserTasksIndexContainer} onEnter={_ensureLoggedIn}/>
        </Route>

        <Route path="/" component={Splash} onEnter={_redirectIfLoggedIn} />
        <Route path="/login" component={FormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={FormContainer} onEnter={_redirectIfLoggedIn} />
      </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Root;
