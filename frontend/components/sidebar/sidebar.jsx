import React from 'react';
import { Link, withRouter } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  expandSidebar() {
    $('#sidebar-wrapper').toggleClass('sidebar-active');
  }

  render() {
    return (
      <div className="z-depth-2"
           id="sidebar-wrapper">
        <div className="sidebar-header">
          <div className=""
            id="logo">
            manasana
          </div>
          <div>
            <a href="#"
               id="close-sidebar"
               onClick={this.expandSidebar}>
              <i className="fa fa-times"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
