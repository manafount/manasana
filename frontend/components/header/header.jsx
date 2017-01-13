import React from 'react';
import { Link, withRouter } from 'react-router';
import { logout } from '../../util/session_api_util';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout()
      .then(() => this.props.router.push('/login'), e => { console.log(e); });
  }


  render() {
    return (
      <nav className="header-nav">
        <div className="row">
          <div className="col s12">
            <ul className="header-links">
              <li className="show-sidebar-menu">
                <a href="#"
                   onClick={this.expandSidebar}>
                   <i className="small material-icons">reorder</i>
                </a>
              </li>
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
      </nav>
    );
  }
}

export default withRouter(Header);
