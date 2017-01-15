import { connect } from 'react-redux';
import ProjectsIndex from './projects_index';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser,
  errors: session.errors
});

export default connect(
  mapStateToProps
)(ProjectsIndex);
