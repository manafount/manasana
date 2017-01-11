import React from 'react';

class Splash extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="splash-container">
        <div className="splash-form">
          <div className="col s12 m10 l8">
            <div className="card darken-1">
              <div className="card-content center-align">
                <button onClick={this.sendToLogin}
                        className="waves-effect waves-light btn-large demo-btn">
                  Demo Login
                </button>
              </div>

              <main>
                <div className="card-content">
                  <label>Email Address</label>
                  <input
                    type="text"
                    name="user[email]"
                    id="email"
                    onChange={this.updateEmail}/>
                  <label>Password</label>
                  <input
                    type="password"
                    name="user[password]"
                    id="password"
                    onChange={this.updatePassword}/>
                  <div className="right-align">
                    <button onClick={this.sendToRegistration}
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
export default Splash;
