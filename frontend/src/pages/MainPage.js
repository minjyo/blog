import React from 'react';
import Header from 'components/common/Header';
import PostListContainer from 'containers/posts/PostListContainer';
import PaginationContainer from 'containers/posts/PaginationContainer';

const MainPage = () => {
  return (
    <>
      <Header />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default MainPage;
