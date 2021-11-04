import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Responsive from 'components/common/Responsive';
import Button from 'components/common/Button';
import SubInfo from 'components/common/SubInfo';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const IntroWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const IntroBlock = styled.div`
  padding: 0.5rem;
  flex: 1;
  border-bottom: 3px solid ${palette.sgOrange};
`;

const IntroText = styled.div`
  font-size: 2.5rem;
  text-align: center;
  z-index: 10;

  @keyframes showUp {
    0% {
      color: white;
      transform: translateY(120%);
    }
    100% {
      color: black;
    }
  }
  animation: showUp 3s;
`;

const WritePostButton = styled(Button)`
  height: 30px;
  margin-left: 4rem;
  align-self: flex-end;
`;

const PostsHeader = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
`;

const PostItemBlock = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  &::first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-bottom: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, title, body, _id } = post;

  return (
    <PostItemBlock>
      <h2>
        <Link to={`/${_id}`}>{title}</Link>
      </h2>
      <SubInfo publishedDate={new Date(publishedDate)} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error }) => {
  if (error) {
    return <PostListBlock>오류 발생</PostListBlock>;
  }

  return (
    <PostListBlock>
      <IntroWrapper>
        <IntroBlock>
          <IntroText>안녕하세요, MINJYO 님!</IntroText>
        </IntroBlock>
        <WritePostButton color="true" to="/write">
          새 글 작성하기
        </WritePostButton>
      </IntroWrapper>
      <PostsHeader>작성된 게시물</PostsHeader>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id}></PostItem>
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
