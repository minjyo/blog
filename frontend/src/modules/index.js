import { combineReducers } from 'redux';
import post, { postSaga } from './post';
import loading from './loading';
import { all } from 'redux-saga/effects';
import write from './write';

const rootReducer = combineReducers({
  post,
  loading,
  write,
});

export function* rootSaga() {
  yield all([postSaga()]);
}

export default rootReducer;
