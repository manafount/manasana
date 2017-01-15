import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  errors: state.session.errors
});

export default connect(
  mapStateToProps
)(Sidebar);
