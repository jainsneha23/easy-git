import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import git from './git';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    git
  });
}
