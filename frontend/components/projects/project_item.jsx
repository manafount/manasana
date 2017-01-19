import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import Paper from 'material-ui/Paper';
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
    const { project , updateProject } = this.props;
    const { name, description } = project;

    return (
      <Paper className="project-item"
             zDepth={this.state.zDepth}
             onMouseEnter={this.handleHover}
             onMouseLeave={this.handleLeave}>
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
