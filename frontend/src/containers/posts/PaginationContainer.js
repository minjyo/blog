import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import Pagination from 'components/posts/Pagination';
import { withRouter } from 'react-router-dom';

const PaginationContainer = ({ location }) => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  if (!posts || loading) return null;

  const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });

  return <Pagination page={parseInt(page, 10)} lastPage={lastPage} />;
};

export default withRouter(PaginationContainer);
