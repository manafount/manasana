import React from 'react';
import { Link, withRouter } from 'react-router';
import Login from './login';
import SignUp from './sign_up';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.formType === "signup") {
      return (
        <SignUp
          processForm={this.props.processForm}
          loggedIn={this.props.loggedIn}
          errors={this.props.errors}
          clearSessionErrors={this.props.clearSessionErrors}/>
      );
    }else{
      return (
        <Login
          processForm={this.props.processForm}
          loggedIn={this.props.loggedIn}
          errors={this.props.errors}
          clearSessionErrors={this.props.clearSessionErrors}/>
      );
    }
  }
}

export default withRouter(Form);
