import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';

class Home extends Component {
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
      <div className={styles.container}>
        <h2>{name}</h2>
        {branch}
        <ul>{branches && branches.map(b => <li>{b}</li>)}</ul>
      </div>
    );
  }
}

Home.propTypes = {
  getRepository: PropTypes.func.isRequired,
  getCurrentBranch: PropTypes.func.isRequired,
  getRepoUrl: PropTypes.func.isRequired,
  getAllBranches: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  branches: PropTypes.array.isRequired
};

export default Home;
