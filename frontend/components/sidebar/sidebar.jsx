import React from 'react';
import { Link, withRouter } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  expandSidebar() {
    $('#sidebar-wrapper').toggleClass('sidebar-active');
  }

  createAvatar(size) {

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
        <hr/>

        <div className="team-list container">
          <div className="circle-avatar-sm">
            MK
          </div>
          <div className="empty-sm">
          </div>
          <div className="empty-sm">
          </div>
          <div className="empty-sm">
          </div>
          <div className="empty-sm">
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
