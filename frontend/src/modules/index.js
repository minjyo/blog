import { combineReducers } from 'redux';
import post, { postSaga } from './post';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  post,
  loading,
});

export function* rootSaga() {
  yield all([postSaga()]);
}

export default rootReducer;
