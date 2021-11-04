import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readPost, unloadPost } from 'modules/post';
import { withRouter } from 'react-router-dom';
import PostViewer from 'components/post/PostViewer';
import PostActionButtons from 'components/post/PostActionButtons';
import { setOriginalPost } from 'modules/write';
import { removePost } from 'lib/api/posts';
import CommentItemList from 'components/comments/CommentList';

const PostViewerContainer = ({ match, history }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, comments } = useSelector(
    ({ post, loading }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      comments: post.comments,
    }),
  );

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

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <PostViewer
        post={post}
        loading={loading}
        error={error}
        actionButtons={
          <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
        }
      ></PostViewer>
      <CommentItemList comments={comments} loading={loading} error={error} />
    </>
  );
};

export default withRouter(PostViewerContainer);
