import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Responsive from 'components/common/Responsive';

const CommentListBlock = styled(Responsive)`
  margin-top: 3rem;
`;
const CommentItemBlock = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  p {
    margin-top: 1rem;
  }
`;

const CommentItem = React.memo(({ comment }) => {
  const { username, body } = comment;

  return (
    <CommentItemBlock>
      <h3>{username}</h3>
      <p>{body}</p>
    </CommentItemBlock>
  );
});

const CommentList = ({ comments, loading, error }) => {
  if (error) {
    return <CommentListBlock>오류 발생</CommentListBlock>;
  }

  return (
    <CommentListBlock>
      {!loading && comments && (
        <div>
          {comments.length === 0
            ? '댓글을 달아주세요!'
            : comments.map((comment) => (
                <CommentItem comment={comment} key={comment._id}></CommentItem>
              ))}
        </div>
      )}
    </CommentListBlock>
  );
};

export default CommentList;
