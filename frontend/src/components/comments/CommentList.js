import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Responsive from 'components/common/Responsive';

const CommentListBlock = styled(Responsive)`
  margin-top: 3rem;
`;
const CommentItemBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
`;

const UsernameBlock = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  flex: 1;
  text-align: left;
`;
const BodyBlock = styled.div`
  font-size: 1.5rem;
  flex: 4;
  text-align: left;
  padding-top: 0.5rem;
`;

const CommentItem = React.memo(({ comment }) => {
  const { username, body } = comment;

  return (
    <CommentItemBlock>
      <UsernameBlock>{username}</UsernameBlock>
      <BodyBlock>{body}</BodyBlock>
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
