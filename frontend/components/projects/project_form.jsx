import React from 'react';
import { Link, withRouter } from 'react-router';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      snacks: false,
      name: "",
      description: "",
      team_id: null
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateTeam = this.updateTeam.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.closeSnacks = this.closeSnacks.bind(this);
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  updateName(e, index, value) {
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  updateTeam(e, index, value) {
    e.preventDefault();
    this.setState({team_id: value});
  }

  updateDescription(e, index, value) {
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, {
      name: this.state.name,
      team_id: this.state.team_id,
      description: this.state.description
    });
    this.props.createProject({ project })
      .then(this.setState({snacks: true}));
    this.handleClose();
    this.setState({
      open: false,
      name: "",
      description: "",
      team_id: null
    });
  }

  closeSnacks() {
    this.setState({snacks: false});
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
        disabled={(this.state.name === "") || (this.state.team_id === null)}
        onTouchTap={this.handleSubmit}/>
    ];

    let teamList;
    if (this.props.teams) {
      teamList = Object.keys(this.props.teams).map((id) => (
        <MenuItem key={id}
                  value={this.props.teams[id].id}
                  primaryText={this.props.teams[id].name}>
        </MenuItem>
      ));
    }

    const rowStyle = {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center'
    };

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
                       flexDirection: 'column',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}>
            <SelectField floatingLabelText="Select A Team"
              value={this.state.team_id}
              onChange={this.updateTeam}
              errorText={(this.state.team_id === null) && 'Required'}>
              {teamList}
            </SelectField>
            <TextField floatingLabelText="Project Name"
              errorText={(this.state.name === "") && 'Required'}
              onChange={this.updateName}/>
            <TextField floatingLabelText="Project Description"
              onChange={this.updateDescription}/>
          </div>
        </Dialog>
        <Snackbar
         open={this.state.snacks}
         message="Project successfully created!"
         autoHideDuration={3000}
         onRequestClose={this.closeSnacks}/>
      </Paper>
    );
  }
}

export default muiThemeable()(withRouter(ProjectForm));
