import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import muiThemeable from 'material-ui/styles/muiThemeable';

class TaskItem extends React.Component {
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
    const { task, deleteTask, updateTask } = this.props;
    const { name, description, due, completed } = task;

    return (
      <ListItem
        leftCheckbox={<Checkbox />}
        primaryText={name}
        secondaryText={description}
      />
    );
  }
}

export default muiThemeable()(withRouter(TaskItem));
