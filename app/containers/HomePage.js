import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as GitActions from '../actions/git';

function mapStateToProps(state) {
  return {
    name: state.git.name,
    branch: state.git.currentBranch,
    branches: state.git.branches
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GitActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
