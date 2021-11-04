import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from 'lib/createRequestSaga';
import * as commentsAPI from 'lib/api/comments';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'comments/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [LIST_COMMENTS, LIST_COMMENTS_SUCCESS, LIST_COMMENTS_FAILURE] =
  createRequestActionTypes('comments/LIST_COMMENTS');
const [WRITE_COMMENT, WRITE_COMMENT_SUCCESS, WRITE_COMMENT_FAILURE] =
  createRequestActionTypes('comments/WRITE_COMMENT');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const listComments = createAction(LIST_COMMENTS, (postId) => postId);
export const writeComment = createAction(
  WRITE_COMMENT,
  ({ username, body, postId }) => ({ username, body, postId }),
);

const listCommentsSaga = createRequestSaga(
  LIST_COMMENTS,
  commentsAPI.listComments,
);
const writeCommentSaga = createRequestSaga(
  WRITE_COMMENT,
  commentsAPI.writeComment,
);

export function* commentsSaga() {
  yield takeLatest(LIST_COMMENTS, listCommentsSaga);
  yield takeLatest(WRITE_COMMENT, writeCommentSaga);
}

const initialState = {
  username: '',
  body: '',
  comments: null,
  error: null,
};

const comments = handleActions(
  {
    [INITIALIZE]: (state) => initialState,

    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),

    [LIST_COMMENTS_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      comments,
    }),
    [LIST_COMMENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),

    [WRITE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
    }),
    [WRITE_COMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default comments;
