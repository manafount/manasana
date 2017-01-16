import React from 'react';
import { Link, withRouter } from 'react-router';

class TeamList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="team-list">
        <div className="add-member">
        </div>
        <div className="circle-avatar-sm">
        </div>
        <div className="empty-sm">
        </div>
        <div className="empty-sm">
        </div>
        <div className="empty-sm">
        </div>
        <div className="empty-sm">
        </div>
        <div className="empty-sm">
        </div>
        <div className="empty-sm">
        </div>
        <div className="circle-plus-sm">
        </div>
      </div>
    );
  }
}

export default TeamList;
