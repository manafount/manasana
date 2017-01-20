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

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      snacks: false,
      name: "",
      description: "",
      due: null
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateTeam = this.updateTeam.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.closeSnacks = this.closeSnacks.bind(this);
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

  updateDescription(e, index, value) {
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, {
      description: this.state.description
    });
    this.props.createTask({ task })
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

    const rowStyle = {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center'
    };

    return (
      <Dialog
        contentClassName="add-task-dialog"
        title="Add A Task"
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
          <TextField floatingLabelText="Task Name"
            errorText={(this.state.name === "") && 'Required'}
            onChange={this.updateName}/>
          <TextField floatingLabelText="Task Description"
            onChange={this.updateDescription}/>
        </div>
      </Dialog>
    );
  }
}

export default muiThemeable()(withRouter(TaskForm));
