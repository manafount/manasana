import React from 'react';
import { Link, withRouter } from 'react-router';
import { logout } from '../../util/session_api_util';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsExpanded: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleTeamsDropdown = this.toggleTeamsDropdown.bind(this);
    this.selectTeam = this.selectTeam.bind(this);
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

  toggleTeamsDropdown(e) {
    console.log(e);

    console.log('toggled');
    this.setState( {
      teamsExpanded: !this.state.teamsExpanded,
      anchorEl: e.currentTarget
     });
  }

  selectTeam(e, id) {
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
            <a href="#"
              onClick={this.expandSidebar}>
              <i className="small material-icons">reorder</i>
            </a>
          </div>
          <div className="header-container">
            <ul className="header-links">
              <li>
                <a href="#/"
                      data-target="#dashboard">
                      Dashboard
                </a>
              </li>
              <li>
                <Link to="/tasks"
                      data-target="#tasks">
                      My Tasks
                </Link>
              </li>
              <li>
                <a href="#"
                  className="teams-dropdown"
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
                <Link to="/calendar"
                      data-target="#calendar">
                      Calendar
                </Link>
              </li>
            </ul>
            <div className="user-profile">
              <Link to="/login"
                data-target="#login"
                onClick={this.handleLogout}>
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
