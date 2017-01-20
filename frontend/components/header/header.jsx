import React from 'react';
import { Link, withRouter } from 'react-router';
import { logout } from '../../util/session_api_util';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsExpanded: false,
      drawerOpen: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleTeamsDropdown = this.toggleTeamsDropdown.bind(this);
    this.selectTeam = this.selectTeam.bind(this);
    this.createLetterAvatar = this.createLetterAvatar.bind(this);
  }

  handleLogout() {
    this.props.logout()
      .then(() => this.props.router.push('/login'), e => { console.log(e); });
  }

  expandSidebar() {
    $('#sidebar-wrapper').toggleClass('sidebar-active');
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  createLetterAvatar(user, color1 = this.props.muiTheme.palette.primary1Color, color2 = 'white'){
    let initials = user.name.split(' ').map((name)=>(name.charAt(0)));
    if (initials.length > 1){
      initials = initials[0].toUpperCase().concat(initials[1].toUpperCase());
    }else{
      initials = initials[0].toUpperCase();
    }
    return (
      <Avatar
          className="colored-avatar"
          color={color2}
          backgroundColor={color1}
          size={30}
          style={{margin:'5px'}}>
          {initials}
      </Avatar>
    );
  }

  toggleTeamsDropdown(e) {
    this.setState( {
      teamsExpanded: !this.state.teamsExpanded,
      anchorEl: (e.currentTarget) ? e.currentTarget.parentElement : this.state.anchorEl
     });
  }

  selectTeam(e, id) {
    e.preventDefault();

    this.props.fetchTeam(id);
    this.toggleTeamsDropdown(e);
  }

  render() {
    let teamList;

    if (this.props.teams) {
      teamList = Object.keys(this.props.teams).map((id) => (
        <MenuItem key={id}
                  value={this.props.teams[id].id}
                  primaryText={this.props.teams[id].name}>
        </MenuItem>
      ));
    }

    return (
      <div className="header-nav z-depth-1">
        <div id="header-wrapper">
          <div className="show-sidebar-menu">
            <a style={{cursor: 'pointer'}}
               onClick={this.expandSidebar}>
              <i className="small material-icons">reorder</i>
            </a>
          </div>
          <div className="header-container">
            <ul className="header-links">
              <li>
                <a href="#/">
                  Dashboard
                </a>
              </li>
              <li>
                <Link to="/tasks">
                  My Tasks
                </Link>
              </li>
              <li>
                <a className="teams-dropdown"
                  onClick={this.toggleTeamsDropdown}>
                  My Teams
                </a>
                <Popover open={this.state.teamsExpanded}
                         anchorEl={this.state.anchorEl}
                         anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                         targetOrigin={{horizontal: 'left', vertical: 'top'}}
                         onRequestClose={this.toggleTeamsDropdown}>
                  <Menu value={(this.props.currentTeam) ? this.props.currentTeam.id : null}
                        onChange={this.selectTeam}>
                    {teamList}
                  </Menu>
              </Popover>
              </li>
              <li>
                <a>
                  Calendar
                </a>
              </li>
            </ul>
            <div className="user-profile">
              <a href="#">
                {(this.props.user) ? this.createLetterAvatar(this.props.user) : ""}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default muiThemeable()(withRouter(Header));
