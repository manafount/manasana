import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import SplashContainer from './splash/splash_container';
import Splash from './splash/splash';
import App from './app';
import Dashboard from './dashboard/dashboard';

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
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
          <IndexRoute component={Dashboard} onEnter={_ensureLoggedIn}/>
        </Route>
        <Route path="/login" component={SplashContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={SplashContainer} onEnter={_redirectIfLoggedIn} />
      </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Root;
