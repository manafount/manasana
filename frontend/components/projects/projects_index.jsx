import React from 'react';
import { Link, withRouter } from 'react-router';
import { Input, Row } from 'react-materialize';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }



  render() {
    return (
      <div className="project-list">
        <Paper zDepth={1}
               className="project-item">
        </Paper>
        <Paper zDepth={1}
               className="project-item">
        </Paper>
        <Paper zDepth={1}
               className="project-item">
        </Paper>
        <Paper zDepth={1}
               className="add-project">
          <FlatButton className="add-project-btn"
                      label="Add Project"
                      primary={true}
                      hoverColor={'white'}
                      style={{color: this.props.muiTheme.palette.primary1Color,
                              borderColor: this.props.muiTheme.palette.primary1Color}}/>
        </Paper>
      </div>
    );
  }
}

export default muiThemeable()(withRouter(ProjectsIndex));
