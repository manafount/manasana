import React from 'react';
import { Link, withRouter } from 'react-router';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: "",
      description: ""
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  updateName(e) {
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, {
      name: this.state.name,
      team_id: this.props.currentTeam.id
    });
    this.props.createProject({ project })
      .then(() => this.props.fetchProjects(this.props.currentTeam.id));
    this.handleClose();
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

    return (
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
          contentStyle={this.props.customWidth}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <div className="dialog-content"
               style={{display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}>
            <label style={{paddingRight: '10px'}}>Project Name: </label>
            <TextField hintText="My New Project"
                       onChange={this.updateName}/>
          </div>
        </Dialog>
      </Paper>
    );
  }
}

export default muiThemeable()(withRouter(ProjectForm));
