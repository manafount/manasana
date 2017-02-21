import React from 'react';
import { Link, withRouter } from 'react-router';
import Login from './login';
import SignUp from './sign_up';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-page">
        <div id="page-header">
          header
        </div>
        <div className="splash-container">
          <header className="splash-header">
            hello world
          </header>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
