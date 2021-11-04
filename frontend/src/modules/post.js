import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import {
  createRequestActionTypes,
  createRequestSaga,
} from 'lib/createRequestSaga';
import * as postAPI from 'lib/api/post';

// DUCK 패턴: 액션 타입 + 액션 생성 함수 + 리듀서 -> 리덕스

const SAMPLE_ACTION = 'post/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);


// 사가 생성
//const sampleSaga = createRequestSaga(SAMPLE_ACTION, postAPI.sample);
export function* postSaga() {
  // yield takeLatest(SAMPLE_ACTION, sampleSaga);
}

const initialState = {};

const post = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default post;
