import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.5rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtonS = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton color="true" onClick={onPublish}>
        포스트 {isEdit ? '수정' : '등록'}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButtonS;
