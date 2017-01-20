import React from 'react';
import { Link, withRouter } from 'react-router';
import TeamList from './team_list';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgcolor: this.props.muiTheme.palette.primary2Color
    };
  }

  closeSidebar() {
    $('#sidebar-wrapper').toggleClass('sidebar-active');
  }

  createAvatar(size) {

  }

  render() {
    return (
      <div className="z-depth-2"
           id="sidebar-wrapper"
           style={{background: this.state.bgcolor}}>
        <div className="sidebar-header">
          <div className=""
            id="logo">
            manasana
          </div>
          <IconButton
            onClick={this.closeSidebar}>
            <FontIcon className="material-icons"
                      color="white"
                      hoverColor="black">
              close
            </FontIcon>
          </IconButton>
        </div>
        <div className="sidebar-main">
          <div className="sidebar-category">
            Team
          </div>
          <TeamList user={this.props.user}/>
        </div>
      </div>
    );
  }
}

export default muiThemeable()(withRouter(Sidebar));
