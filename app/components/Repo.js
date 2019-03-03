import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import GitActions from '../actions';

class Repo extends Component {
  componentDidMount() {
    const {
      getRepository,
      getCurrentBranch,
      getRepoUrl,
      getAllBranches
    } = this.props;
    getRepository();
    getRepoUrl();
    getCurrentBranch();
    getAllBranches();
  }

  render() {
    const { name, branch, branches } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        {branch}
        <ul>{branches && branches.map(b => <li key={b}>{b}</li>)}</ul>
      </div>
    );
  }
}

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
)(Repo);
