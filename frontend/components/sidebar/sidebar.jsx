import React from 'react';
import { Link, withRouter } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-container z-depth-2">
        sidebar
      </div>
    );
  }
}

export default withRouter(Sidebar);
