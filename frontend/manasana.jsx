import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';


import { login, logout, signup } from './util/session_api_util';
import { createProject, fetchProject, fetchProjects, deleteProject } from './actions/project_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.createProject = createProject;
  window.fetchProject = fetchProject;
  window.fetchProjects = fetchProjects;
  window.deleteProject = deleteProject;

  injectTapEventPlugin();

  let store;
  if (window.currentUser) {
    const preloadedState = { currentTeam: null, session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
