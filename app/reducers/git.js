export default function git(state = {branches: []}, action) {
  switch (action.type) {
    case 'SET_REPOSITORY':
      return { ...state, repo: action.repo };
    case 'SET_CONFIG':
      return { ...state, config: action.config };
    case 'SET_REPO_NAME':
      return { ...state, name: action.name };
    case 'SET_CURRENT_BRANCH':
      return { ...state, currentBranch: action.name };
    case 'SET_LOCAL_BRANCHES':
      return { ...state, branches: action.branches };
    default:
      return state;
  }
}
