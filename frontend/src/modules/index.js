import { combineReducers } from 'redux';
import post, { postSaga } from './post';
import loading from './loading';
import { all } from 'redux-saga/effects';
import write, { writeSaga } from './write';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
  post,
  loading,
  write,
  posts,
});

export function* rootSaga() {
  yield all([postSaga(), writeSaga(), postsSaga()]);
}

export default rootReducer;
