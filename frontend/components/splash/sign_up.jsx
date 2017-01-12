import React from 'react';
import { Link, withRouter } from 'react-router';


class SignUp extends React.Component {
  constructor(props) {
		super(props);
		this.state = { name: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
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
      <div className="splash-container row">
        <div className="splash-title">
          <h2>manasana</h2>
        </div>
        <div className="splash-form">
          <div>
            <div className="card darken-1">
              <div className="card-content center-align">
                <h5>Sign Up</h5>
              </div>
              <main>
                <div className="card-content">
                  <label for="name">Full Name</label>
                  <input
                    type="text"
                    name="user[name]"
                    id="name"
                    onChange={this.update('name')}/>
                  <label for="email">Email Address</label>
                  <input
                    type="text"
                    name="user[email]"
                    id="email"
                    onChange={this.update('email')}/>
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="user[password]"
                    id="password"
                    onChange={this.update('password')}/>
                  <div className="right-align">
                    <button onClick={this.handleSubmit}
                      className="waves-effect waves-light btn-large center-align demo-btn">
                      Sign Up
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
              Already have an account? <Link to="/login">Log In!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
