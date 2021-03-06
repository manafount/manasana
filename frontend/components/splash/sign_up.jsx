import React from 'react';
import { Link, withRouter } from 'react-router';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class SignUp extends React.Component {
  constructor(props) {
		super(props);
		this.state = { name: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
	}

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillReceiveProps() {
    if(this.props.errors){
      this.props.clearSessionErrors();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    if(this.props.errors !== null){
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
	}

  render () {
    return (
      <div className="splash-container">
        <Link className="logo-white" to="/">manasana</Link>
        <div className="splash-form">
          <Card className="splash-card">
            <div>
              <h1>Sign Up</h1>
            </div>
            <hr/>
            <div className="errors">
              {this.renderErrors()}
            </div>
            <TextField type="text"
              name="user[email]"
              floatingLabelText="Email Address"
              fullWidth={true}
              style={{width:'80%'}}
              onChange={this.update('email')}>
            </TextField>
            <TextField type="text"
              name="user[name]"
              floatingLabelText="Full Name"
              fullWidth={true}
              style={{width:'80%'}}
              onChange={this.update('name')}>
            </TextField>
            <TextField type="password"
              name="user[password]"
              floatingLabelText="Password"
              fullWidth={true}
              style={{width:'80%'}}
              onChange={this.update('password')}>
            </TextField>
            <div className="right-align">
              <RaisedButton onClick={this.handleSubmit}
                            label="Sign Up"
                            secondary={true}>
              </RaisedButton>
            </div>
          </Card>
          <div className="login-footer">
            <div className="login-footer-left">
            </div>
            <div className="login-footer-right">
              Already have an account? <Link to="/login">Log In!</Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
