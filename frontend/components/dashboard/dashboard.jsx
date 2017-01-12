import React from 'react';
import { Link, withRouter } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Dashboard</div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
