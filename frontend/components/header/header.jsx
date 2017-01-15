import React from 'react';
import { Link, withRouter } from 'react-router';
import { logout } from '../../util/session_api_util';
import { Dropdown, Nav, NavItem } from 'react-materialize';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.showTeamsIndex = this.showTeamsIndex.bind(this);
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

  showTeamsIndex() {
    console.log(this.props.teams);
  }

  render() {
    return (
      <div className="header-nav z-depth-1">
        <div id="header-wrapper">
          <div className="show-sidebar-menu">
            <a href="#"
              onClick={this.expandSidebar}>
              <i className="small material-icons">reorder</i>
            </a>
          </div>
          <div className="container">
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
                  onClick={this.showTeamsIndex}>
                  My Teams
                </a>
              </li>
              <li>
                <Link to="/calendar"
                      data-target="#calendar">
                      Calendar
                </Link>
              </li>
              <li>
                <Link to="/login"
                      data-target="#login"
                      onClick={this.handleLogout}>
                      Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
