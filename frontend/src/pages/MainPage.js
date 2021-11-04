import React from 'react';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import PostList from 'components/posts/PostList';

const MainPage = () => {
  return (
    <div>
      <Header />
      <PostList />
    </div>
  );
};

export default MainPage;
