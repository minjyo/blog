import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Responsive from 'components/common/Responsive';
import Button from 'components/common/Button';

const CommentInputBlock = styled(Responsive)`
  margin-top: 3rem;
  display: flex;
`;

const UsernameInput = styled.input`
  padding: 1rem;
  flex: 1;
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.sgOrange};
  font-size: 1.25rem;
`;
const BodyInput = styled.input`
  padding: 1rem;
  flex: 4;
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.sgOrange};
  margin-left: 2rem;
  margin-right: 4rem;
  font-size: 1.25rem;
`;

const StyledButton = styled(Button)`
  height: 2.5rem;
`;

const CommentInput = React.memo(
  ({ username, body, onChangeField, onPublish }) => {
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
        <BodyInput
          placeholder="댓글 내용"
          onChange={onChangeBody}
          value={body}
        />
        <StyledButton color="true" onClick={onPublish}>
          등록
        </StyledButton>
      </CommentInputBlock>
    );
  },
);

export default CommentInput;
