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

import TaskList from './task_list';
import TaskDetail from './task_detail';
import TaskItem from './task_item';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addOpen: false
    };

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks(this.props.projectId);
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
            deleteTask, fetchTasks, fetchTask, errors } = this.props;

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
        <TaskList taskItems={taskItems}
                  tasks={tasks}
                  createTask={createTask}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                  fetchTask={fetchTask}
                  fetchTasks={fetchTasks}
                  errors={errors}/>
        <TaskDetail />
      </div>
    );
  }
}

export default muiThemeable()(withRouter(TasksIndex));
