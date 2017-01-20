import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
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

  redirectToProject(id){
    this.props.router.replace(`/projects/${id}`);
  }

  render() {
    const { project, deleteProject, updateProject } = this.props;
    const { name, description } = project;

    return (
      <Paper className="project-item"
             zDepth={this.state.zDepth}
             onMouseEnter={this.handleHover}
             onMouseLeave={this.handleLeave}
             onTouchTap={() => this.redirectToProject(project.id)}>
        <div className="project-item-header">
          {name}
          <IconButton
            iconClassName="material-icons"
            tooltip="Delete Project"
            tooltipPosition="bottom-left"
            onTouchTap={() => deleteProject(project.id)}>
            close
          </IconButton>
        </div>
        <Divider/>
        <br/>
        <div>
          {description}
        </div>
      </Paper>
    );
  }
}

export default muiThemeable()(withRouter(ProjectItem));
