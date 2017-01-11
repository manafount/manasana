import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SplashContainer from './splash/splash_container';
import Splash from './splash/splash';
// import App from './app';
import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/dashboard');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={SplashContainer}>
          <IndexRoute component={SplashContainer} />
          <Route path="/login" component={SplashContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SplashContainer} onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
