import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Responsive from 'components/common/Responsive';
import SubInfo from 'components/common/SubInfo';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 2px solid ${palette.gray[2]};
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.5rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, publishedDate } = post;

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          publishedDate={new Date(publishedDate)}
          hasMarginTop="true"
        ></SubInfo>
      </PostHead>
      {actionButtons}
      <PostContent
        //HTHML 적용
        dangerouslySetInnerHTML={{ __html: body }}
      ></PostContent>
    </PostViewerBlock>
  );
};

export default PostViewer;
