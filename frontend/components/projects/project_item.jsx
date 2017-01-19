import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';

class ProjectItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zDepth: 1
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleHover(mousedOver) {
    this.setState({
      zDepth: 2
    });
  }

  handleLeave() {
    this.setState({
      zDepth: 1
    });
  }

  render() {
    const { project, deleteProject, updateProject } = this.props;
    const { name, description } = project;

    return (
      <Paper className="project-item"
             zDepth={this.state.zDepth}
             onMouseEnter={this.handleHover}
             onMouseLeave={this.handleLeave}>
        <div className="project-item-header">
          {name}
          <IconButton
            iconClassName="material-icons"
            tooltip="Delete Project"
            tooltipPosition="bottom-left"
            onClick={() => deleteProject(project.id)}>
            close
          </IconButton>
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
