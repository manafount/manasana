import React from 'react';
import { Link, withRouter } from 'react-router';
import { Input, Row } from 'react-materialize';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <div>I work!</div>
        <div>Current Team: 
          {this.props.currentTeam ? this.props.currentTeam.name : 'none'}
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectsIndex);
