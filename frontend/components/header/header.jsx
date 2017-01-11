import React from 'react';
import Async from 'react-promise';
import { Link, withRouter } from 'react-router';
import { logout } from '../../util/session_api_util';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {

  }

  handleLogout() {
    this.props.logout()
      .then(() => this.props.router.push('/login'));
  }


  render() {
    return (
      <header>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3">
                <a href="#/"
                      data-target="#dashboard">
                      Dashboard
                </a>
              </li>
              <li className="tab col s3">
                <Link to="/tasks"
                      data-target="#tasks">
                      My Tasks
                </Link>
              </li>
              <li className="tab col s3">
                <Link to="/calendar"
                      data-target="#calendar">
                      Calendar
                </Link>
              </li>
              <li className="tab col s3">
                <Link to="/login"
                      data-target="#login"
                      onClick={this.handleLogout}>
                      Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
