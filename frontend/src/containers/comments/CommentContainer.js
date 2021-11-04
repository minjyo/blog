import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  listComments,
  changeField,
  writeComment,
  initialize,
} from 'modules/comments';
import CommentList from 'components/comments/CommentList';
import CommentInput from 'components/comments/CommentInput';
import { withRouter } from 'react-router-dom';

const CommentContainer = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { username, body, comments, error, loading } = useSelector(
    ({ comments, loading }) => ({
      username: comments.username,
      body: comments.body,
      comments: comments.comments,
      error: comments.error,
      loading: loading['comments/LIST_COMMENTS'],
    }),
  );

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  const onPublish = async () => {
    await dispatch(writeComment({ username, body, postId }));
    dispatch(listComments(postId));
    dispatch(initialize());
  };

  useEffect(() => {
    dispatch(listComments(postId));
    return () => {
      dispatch(initialize());
    };
  }, [dispatch, postId]);

  return (
    <>
      <CommentInput
        onChangeField={onChangeField}
        username={username}
        body={body}
        onPublish={onPublish}
      />
      <CommentList
        loading={loading}
        error={error}
        comments={comments}
      ></CommentList>
    </>
  );
};

export default withRouter(CommentContainer);
