import { createAction, handleActions } from 'redux-actions';

// DUCK 패턴: 액션 타입 + 액션 생성 함수 + 리듀서 -> 리덕스

const SAMPLE_ACTION = 'post/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

const initialState = {};

const post = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default post;
