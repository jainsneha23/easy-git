import basename from '../utils/url';
import GitCmd from '../utils/git-cmd';

export function getRepository() {
  const path = '/Users/py35/Documents/workspace/tesco/homepage-web/';
  const repo = new GitCmd({ 'git-dir': `${path}.git`, 'work-tree': path });
  return { type: 'SET_REPOSITORY', repo };
}

export function getRepoUrl() {
  return (dispatch, getState) => {
    const { git } = getState();
    const { repo } = git;

    return new Promise(() => {
      repo.exec('config', {get: true}, ['remote.origin.url'], (err, result) => {
        if (err) window.reportError(err);
        dispatch({ type: 'SET_REPO_NAME', name: basename(result) });
      });
    });
  };
}

export function getCurrentBranch() {
  return (dispatch, getState) => {
    const { git } = getState();
    const { repo } = git;

    return new Promise(() => {
      repo.exec('branch', {contains: true}, [], (err, result) => {
        if (err) window.reportError(err);
        dispatch({ type: 'SET_CURRENT_BRANCH', name: result.trim().substr(2) });
      });
    });
  };
}

export function getAllBranches() {
  return (dispatch, getState) => {
    const { git } = getState();
    const { repo } = git;

    return new Promise(() => {
      repo.exec('branch', (err, result) => {
        if (err) window.reportError(err);
        dispatch({ type: 'SET_LOCAL_BRANCHES', branches: result.split('\n').map(r => r.trim()).filter(r => r && !r.startsWith('*')) });
      });
    });
  };
}
