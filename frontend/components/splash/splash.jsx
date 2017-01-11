import React from 'react';
import { Link, withRouter } from 'react-router';


class Splash extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
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

  render () {
    return (
      <div className="splash-container">
        <div className="splash-title">
          <h2>manasana</h2>
        </div>
        <div className="splash-form">
          <div className="col s12 m10 l8">
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
                <hr/>
              </div>
              <main>
                <div className="card-content">
                  <label>Email Address</label>
                  <input
                    type="text"
                    name="user[email]"
                    id="email"
                    onChange={this.update('email')}/>
                  <label>Password</label>
                  <input
                    type="password"
                    name="user[password]"
                    id="password"
                    onChange={this.update('password')}/>
                  <div className="right-align">
                    <button onClick={this.handleSubmit}
                      className="waves-effect waves-light btn-large center-align demo-btn">
                      Sign In
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
