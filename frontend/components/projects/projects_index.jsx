import React from 'react';
import { Link, withRouter } from 'react-router';
import { Input, Row } from 'react-materialize';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>I work!</div>
    );
  }
}

export default withRouter(ProjectsIndex);
