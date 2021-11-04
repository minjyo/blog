import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listComments } from 'modules/comments';
import CommentList from 'components/comments/CommentList';
import { withRouter } from 'react-router-dom';

const CommentListContainer = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { comments, error, loading } = useSelector(({ comments, loading }) => ({
    comments: comments.comments,
    error: comments.error,
    loading: loading['comments/LIST_COMMENTS'],
  }));

  useEffect(() => {
    dispatch(listComments(postId));
  }, [dispatch, postId]);

  return (
    <CommentList
      loading={loading}
      error={error}
      comments={comments}
    ></CommentList>
  );
};

export default withRouter(CommentListContainer);
