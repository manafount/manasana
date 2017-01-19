import React from 'react';
import { Link, withRouter } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

import ProjectItem from './project_item';


class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}/>,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}/>
    ];

    const customWidth= {
      width: '60%',
      maxWidth: '500px',
    };

    let projectItems;
    const { projects, createProject, updateProject, fetchProject, errors } = this.props;

    if (projects) {
      console.log(projects);
      projectItems = Object.keys(projects).map(id => (
        <ProjectItem
          key={ id }
          project={ projects[id] }
          updateProject={ updateProject } />
      ));
    }else{
      projectItems='';
    }

    return (


      <div className="project-list">
        {projectItems}
        <Paper zDepth={1}
               className="add-project">
          <RaisedButton id="add-project-btn"
                      label="Add Project"
                      primary={true}
                      onTouchTap={this.handleOpen}/>
            <Dialog
              contentClassName="add-project-dialog"
              title="Add A Project"
              titleStyle={{borderBottom: '1px solid #F5F5F5'}}
              actions={actions}
              modal={false}
              contentStyle={customWidth}
              open={this.state.open}
              onRequestClose={this.handleClose}>
              <div className="dialog-content"
                   style={{display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                         }}>
                <label style={{paddingRight: '10px'}}>Project Name: </label>
                <TextField
                  hintText="My New Project"/>
              </div>
            </Dialog>
        </Paper>
      </div>
    );
  }
}

export default muiThemeable()(withRouter(ProjectsIndex));
