import React from 'react';
import { Link, withRouter } from 'react-router';
import Login from './login';
import SignUp from './sign_up';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.formType === "signup") {
      return (
        <SignUp
          processForm={this.props.processForm}
          loggedIn={this.props.loggedIn}/>
      );
    }else{
      return (
        <Login
          processForm={this.props.processForm}
          loggedIn={this.props.loggedIn}/>
      );
    }
  }
}

export default withRouter(Splash);
