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
import Checkbox from 'material-ui/Checkbox';
import muiThemeable from 'material-ui/styles/muiThemeable';

import TaskItem from './task_item';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addOpen: false
    };

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleAddButton (event) {
    event.preventDefault();
    this.setState({
      addOpen: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose () {
    this.setState({
      addOpen: false,
    });
  }


  render() {
    let taskItems;
    const { tasks, createTask, updateTask,
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

    return (
      <div className="tasks-container">
        <Paper className="tasks-list"
               style={{overflow: 'scroll'}}>
          <div className="list-header">
            <FloatingActionButton mini={true}
              zDepth={1}
              style={{margin: '15px'}}
              onTouchTap={this.handleAddButton}>
             <ContentAdd />
           </FloatingActionButton>
           <Popover
              open={this.state.addOpen}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: "right", vertical: "top"}}
              targetOrigin={{horizontal: "left", vertical: "top"}}
              onRequestClose={this.handleRequestClose}>
              <Menu>
                <MenuItem primaryText="Add Task" />
                <MenuItem primaryText="Add Section" />
              </Menu>
            </Popover>
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
