import React, { useEffect } from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { listPosts } from 'modules/posts';
import { withRouter } from 'react-router-dom';
import PostList from 'components/posts/PostList';

const PostListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: loading['posts/LIST_POSTS'],
  }));

  useEffect(() => {
    const { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts(page));
  }, [dispatch, location.search]);

  return <PostList loading={loading} error={error} posts={posts}></PostList>;
};

export default withRouter(PostListContainer);
