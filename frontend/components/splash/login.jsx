import React from 'react';
import { Link, withRouter } from 'react-router';
import { Row, Input } from 'react-materialize';

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
        <div className="splash-title">
          <h2>manasana</h2>
        </div>
        <div className="splash-form">
          <div className="splash-card">
            <div className="card darken-1">
              <div className="card-content center-align">
                <h5>Log In</h5>
              </div>
              <div className="card-content center-align">
                <button onClick={this.handleDemoSubmit}
                        className="waves-effect waves-light btn-large demo-btn">
                  Demo Login
                </button>
              </div>
              <div className="card-content">
                <hr className="or"/>
              </div>
              <div className="errors card-content">
                {this.renderErrors()}
              </div>
              <main>
                <div className="card-content">
                  <Row>
                    <Input type="text"
                      name="user[email]"
                      label="Email Address"
                      s={12}
                      onChange={this.update('email')}>
                    </Input>
                    <Input type="text"
                      name="user[password]"
                      label="Password"
                      s={12}
                      onChange={this.update('password')}>
                    </Input>
                  </Row>
                  <div className="right-align">
                    <button onClick={this.handleSubmit}
                      className="waves-effect waves-light btn-large center-align demo-btn">
                      Log In
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="login-footer">
            <div className="login-footer-left">
              Link 1 | Link 2 | Link 3
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
