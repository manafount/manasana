import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

class ProjectItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { project , updateProject } = this.props;
    const { name, description } = project;

    return (
      <Paper className="project-item"
             zDepth={1}>
        <div className="project-header">
          {name}
        </div>
        <br/>
        <div>
          {description}
        </div>
      </Paper>
    );
  }
}

export default muiThemeable()(withRouter(ProjectItem));
