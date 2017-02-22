import React from 'react';
import { Link, withRouter } from 'react-router';
import Login from './login';
import SignUp from './sign_up';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(route) {
    this.props.router.push(route);
  }

  render() {
    return (
      <div className="page-wrapper">
        <div id="page-header">
          <div className="logo-gray">manasana</div>
          <div className="splash-header-buttons">
            <RaisedButton onClick={() => this.handleRedirect('signup')}
              label="Sign Up"
              secondary={true}>
            </RaisedButton>
            <FlatButton onClick={() => this.handleRedirect('login')}
              label="Log In">
            </FlatButton>
          </div>
        </div>
        <div className="splash-body">
          <div className="splash-container">
            <div className="splash-hero">
              <h2>Productivity simplified</h2>
              <h6>Manasana makes it easy to track the progress of your team's projects</h6>
              <RaisedButton onClick={() => this.handleRedirect('login')}
                label="Get Started"
                secondary={true}>
              </RaisedButton>
            </div>
          </div>
        </div>
        <div className="splash-footer">
          <div id="footer-1">
            <FontIcon className="fa fa-users" style={{fontSize: '48px'}}></FontIcon>
            <h6>Share task and project<br/> status with a team</h6>
          </div>
          <div id="footer-1">
            <FontIcon className="material-icons" style={{fontSize: '48px'}}>assignment</FontIcon>
            <h6>Create and manage tasks</h6>
          </div>
          <div id="footer-1">
            <FontIcon className="fa fa-check-square-o" style={{fontSize: '48px'}}></FontIcon>
            <h6>Get work done</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
