import React from 'react';
import Editor from '../components/write/Editor';
import Responsive from 'components/common/Responsive';
import WriteActionButtonS from 'components/write/WriteActionButtons';

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <WriteActionButtonS />
    </Responsive>
  );
};

export default WritePage;
