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


class TaskDetail extends React.Component {
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
    if (this.props.task){
      const { task, deleteTask, updateTask } = this.props;
      const { name, description, due, completed } = task;

      return (
        <div className="task-detail-container">
          <Paper className="tasks-list"
            style={{overflow: 'scroll'}}>
            <div className="detail-header">

            </div>
            <div className="detail-body">
            </div>
          </Paper>
        </div>
      );
    }else{
      return (
        <div></div>
      );
    }
  }
}

export default muiThemeable()(withRouter(TaskDetail));
