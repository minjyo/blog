import React from 'react';
import Header from 'components/common/Header';
import PostViewerContainer from 'containers/post/PostViewerContainer';
import CommentListContainer from 'containers/comments/CommentListContainer';

const PostPage = () => {
  return (
    <>
      <Header />
      <PostViewerContainer />
      <CommentListContainer />
    </>
  );
};

export default PostPage;
