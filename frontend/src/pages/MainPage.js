import React from 'react';
import Header from 'components/common/Header';
import PostListContainer from 'containers/posts/PostListContainer';

const MainPage = () => {
  return (
    <div>
      <Header />
      <PostListContainer />
    </div>
  );
};

export default MainPage;
