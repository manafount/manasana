import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser,
  errors: session.errors
});

export default connect(
  mapStateToProps
)(Sidebar);
