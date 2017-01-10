import React from 'react';

class Splash extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <nav className="group splash-page">
          <div className="container">
            <div className="logo">
            </div>
            <button onClick={this.sendToLogin}>Log In</button>
          </div>
        </nav>
        <main>
          <section className="leader">
            <h1>Manasana</h1>
            <h2>This is the subtitle!</h2>
            <input
              type="text"
              name="user[email]"
              id="email"
              onChange={this.updateEmail}
              placeholder="name@company.com" />
              <button onClick={this.sendToRegistration}>
                Get Started
              </button>
          </section>
        </main>
      </div>
    );
  }
}
export default Splash;
