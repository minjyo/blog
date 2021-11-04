import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readPost, unloadPost } from 'modules/post';
import { withRouter } from 'react-router-dom';
import PostViewer from 'components/post/PostViewer';
import PostActionButtons from 'components/post/PostActionButtons';
import { setOriginalPost } from 'modules/write';

const PostViewerContainer = ({ match, history }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));

  useEffect(() => {
    dispatch(readPost(postId));

    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={<PostActionButtons onEdit={onEdit} />}
    ></PostViewer>
  );
};

export default withRouter(PostViewerContainer);
