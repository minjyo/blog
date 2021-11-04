import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Responsive from 'components/common/Responsive';

const CommentInputBlock = styled(Responsive)`
  margin-top: 3rem;
  display: flex;
`;

const UsernameInput = styled.input`
  padding: 1rem;
  flex: 1;
  border-bottom: 1px solid ${palette.gray[2]};
`;
const BodyInput = styled.input`
  padding: 1rem;
  flex: 3;
  border-bottom: 1px solid ${palette.gray[2]};
`;

const CommentInput = ({ username, body, onChangeField }) => {
  const onChangeUsername = (e) => {
    onChangeField({ key: 'username', value: e.target.value });
  };

  const onChangeBody = (e) => {
    onChangeField({ key: 'body', value: e.target.value });
  };
  return (
    <CommentInputBlock>
      <UsernameInput
        placeholder="사용자 이름"
        onChange={onChangeUsername}
        value={username}
      />
      <BodyInput placeholder="댓글 내용" onChange={onChangeBody} value={body} />
    </CommentInputBlock>
  );
};

export default CommentInput;
