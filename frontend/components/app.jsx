import React from 'react';
import { Link } from 'react-router';

import HeaderContainer from './header/header_container';
import SidebarContainer from './sidebar/sidebar_container';

const App = ({ children }) => (
  <div className="app">
    <SidebarContainer />
    <div className="main-page">
      <HeaderContainer />
      {children}
    </div>
  </div>
);

export default App;
