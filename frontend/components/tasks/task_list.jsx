import React from 'react';
import { Link, withRouter } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import Snackbar from 'material-ui/Snackbar';
import Checkbox from 'material-ui/Checkbox';
import muiThemeable from 'material-ui/styles/muiThemeable';

import TaskItem from './task_item';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      snacks: false,
      name: "",
      description: "",
      project_id: this.props.projectId,
      author_id: this.props.user.id,
      due: null
    };

    console.log(this.props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateDue = this.updateDue.bind(this);
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

  updateDue(e, index, value) {
    e.preventDefault();
    this.setState({due: value});
  }

  updateDescription(e, index, value) {
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, {
      name: this.state.name,
      due: this.state.due,
      project_id: this.state.project_id,
      author_id: this.state.author_id,
      description: this.state.description
    });
    this.props.createTask({ task })
      .then(this.setState({snacks: true}));
    this.handleClose();
    this.setState({
      open: false,
      snacks: false,
      name: "",
      description: "",
      due: null
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
        disabled={(this.state.name === "")}
        onTouchTap={this.handleSubmit}/>
    ];

    let taskItems;
    const { tasks, createTask, updateTask, userTasks,
            deleteTask, fetchTask, errors } = this.props;

    if (tasks) {
      taskItems = Object.keys(tasks).map(id => (
        <TaskItem
          key={ id }
          task={ tasks[id] }
          updateTask={ updateTask }
          deleteTask={ deleteTask }/>
      ));
    }else{
      taskItems='';
    }
    let button = (
      <FloatingActionButton mini={true}
        zDepth={1}
        style={{margin: '15px'}}
        onTouchTap={this.handleOpen}>
        <ContentAdd />
      </FloatingActionButton>
    );

    if (userTasks){
      button = undefined;
    }

    return (
      <div className="tasks-container">
        <Paper className="tasks-list"
               style={{overflowY: 'scroll'}}>
          <div className="list-header">
            {button}

           <Dialog
             contentClassName="add-project-dialog"
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
               <TextField floatingLabelText="Task Title"
                 errorText={(this.state.name === "") && 'Required'}
                 onChange={this.updateName}/>
               <TextField floatingLabelText="Task Description"
                 onChange={this.updateDescription}/>
             </div>
           </Dialog>
           <Snackbar
            open={this.state.snacks}
            message="Task successfully created!"
            autoHideDuration={3000}
            onRequestClose={this.closeSnacks}/>

          </div>
          <div className="list-body">
            <List>
              <Subheader>Important Tasks</Subheader>
              {taskItems}
            </List>
          </div>
        </Paper>
      </div>
    );
  }
}

export default muiThemeable()(withRouter(TaskList));
