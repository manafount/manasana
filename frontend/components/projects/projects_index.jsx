import React from 'react';
import { Link, withRouter } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

import ProjectItem from './project_item';
import ProjectFormContainer from './project_form_container';


class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {

    const customWidth= {
      width: '60%',
      maxWidth: '500px',
    };

    let projectItems;
    const { projects, createProject, updateProject,
            deleteProject, fetchProject, errors } = this.props;

    if (projects) {
      console.log(projects);
      projectItems = Object.keys(projects).map(id => (
        <ProjectItem
          key={ id }
          project={ projects[id] }
          updateProject={ updateProject }
          deleteProject={ deleteProject }/>
      ));
    }else{
      projectItems='';
    }

    return (
      <div className="project-list">
        <ProjectFormContainer className="project-form"
                              customWidth={customWidth}/>
        {projectItems}
      </div>
    );
  }
}


export default muiThemeable()(withRouter(ProjectsIndex));
