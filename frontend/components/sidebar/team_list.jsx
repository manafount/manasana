import React from 'react';
import { Link, withRouter } from 'react-router';
import { Input } from 'react-materialize';

class TeamList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="team-list">
        <div className="add-member">
          <Input type="text"></Input>
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
