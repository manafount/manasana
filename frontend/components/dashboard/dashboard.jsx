import React from 'react';
import { Link, withRouter } from 'react-router';

import ProjectsContainer from '../projects/projects_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProjectsContainer/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
