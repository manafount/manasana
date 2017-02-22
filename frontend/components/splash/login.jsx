import React from 'react';
import { Link, withRouter } from 'react-router';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {
  constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
	}

  componentDidUpdate() {
    this.redirectIfLoggedIn();
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

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = {email: "demo.user@manasana.io", password: "demouser"};
    this.props.processForm({user});
  }

  componentWillReceiveProps() {
    if(this.props.errors){
      this.props.clearSessionErrors();
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
              <h1>Log In</h1>
            </div>
            <div>
              <RaisedButton onClick={this.handleDemoSubmit}
                      className="demo-btn"
                      label="Demo Login"
                      primary={true}>
              </RaisedButton>
            </div>
            <hr className="or"/>
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
            <TextField type="password"
              name="user[password]"
              floatingLabelText="Password"
              fullWidth={true}
              style={{width:'80%'}}
              onChange={this.update('password')}>
            </TextField>
            <div className="right-align">
              <RaisedButton onClick={this.handleSubmit}
                            label="Log In"
                            secondary={true}>
              </RaisedButton>
            </div>
          </Card>
          <div className="login-footer">
            <div className="login-footer-left">
            </div>
            <div className="login-footer-right">
              Don't have an account? <Link to="/signup">Sign Up!</Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
